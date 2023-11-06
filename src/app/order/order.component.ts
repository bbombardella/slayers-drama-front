import {Component, DestroyRef, Input} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {OrderEntity} from "../api/models/order-entity";
import {Router} from "@angular/router";
import {OrderService} from "../api/services/order.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public order: OrderEntity | undefined;

  private readonly _cancelationToken: Subject<void> = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly orderService: OrderService,
    private readonly destroyRef: DestroyRef
  ) {
  }

  @Input()
  set id(orderId: string) {
    if (isNaN(+orderId)) {
      this.handleError();
      return;
    }

    this._cancelationToken.next();

    this.orderService
      .orderControllerFindOne({id: +orderId})
      .pipe(
        takeUntil(this._cancelationToken),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (r) => this.order = r,
        error: () => this.handleError()
      });
  }

  private handleError(): void {
    this.router.navigate(['/home']);
  }
}
