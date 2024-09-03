import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OrderComponent } from '../order/order.component';
import { OrdersService } from '../../services/Orders/orders.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SidebarComponent, OrderComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  public ordersList: any;
  public OrderProductsList:any;
  constructor(private OrdersService: OrdersService) {

  }

  ngOnInit(): void {
    this.OrdersService.getOrdersByUserId(1).subscribe(res => {
      this.ordersList = res
    })
    console.log(this.ordersList)
  }
  
}
