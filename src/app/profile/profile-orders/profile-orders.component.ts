import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TableColumns} from "../../shared/ui/table-paginated/table-paginated.component";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {OrderService} from "../../api/services/order.service";
import {OrderEntity} from "../../api/models/order-entity";

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss']
})
export class ProfileOrdersComponent {
  readonly columns: TableColumns[] = [
    {
      name: 'ID',
      field: 'id'
    },
    {
      name: 'Statut',
      field: 'status'
    },
    {
      name: 'Date de création',
      field: 'createdAt',
      pipe: new DatePipe(this.locale)
    }
  ];

  get fetchMethod() {
    return this.orderService.orderControllerFindAllMine.bind(this.orderService);
  }

  constructor(private readonly orderService: OrderService,
              @Inject(LOCALE_ID) private readonly locale: string,
              private readonly router: Router) {
  }

  redirectToOrder(data: OrderEntity): void {
    this.router.navigate(['/order', data.id]);
  }
}
