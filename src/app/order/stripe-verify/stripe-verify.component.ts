import {Component, DestroyRef, Input} from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {OrderService} from "../../api/services/order.service";
import {OrderEntity} from "../../api/models/order-entity";

@Component({
  selector: 'app-stripe-verify',
  templateUrl: './stripe-verify.component.html',
  styleUrls: ['./stripe-verify.component.scss']
})
export class StripeVerifyComponent {

  order: OrderEntity | undefined;
  status: 'LOADING' | 'VALIDATED' | 'CANCELLED' | 'ERROR' = 'LOADING';

  constructor(private readonly orderService: OrderService,
              private readonly destroyRef: DestroyRef) {
  }


  @Input()
  set id(sessionId: string) {
    this.orderService
      .orderControllerPaymentCallback({sessionId})
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (r) => {
          this.order = r;

          switch (this.order.status) {
            case 'PAYING':
              this.status = 'ERROR';
              break;
            case 'PAYED':
              this.status = 'VALIDATED';
              break;
            case 'CANCELLED':
              this.status = 'CANCELLED';
              break;
            default:
              this.status = 'ERROR';
              break;
          }
        },
        error: () => this.status = 'ERROR'
      });
  }

}
