import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SidebarComponent,OrderComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

}
