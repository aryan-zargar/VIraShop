import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/Orders/orders.service';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

import moment from 'moment-jalaali';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,MatTooltipModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  @Input() orderId!:number;
  @Input() status!:boolean;
  @Input() date!:string;
  @Input() Code!:string;
  public ProductList:any;
  constructor(private OrderService:OrdersService){

  }

  public redirect(path:string){
    window.location.pathname = path
  }
  public convertGregoryDateToJalali(date: string) {
    var m = moment(date)
    return m.format('jYYYY/jMM/jDD')
  }
  ngOnInit(): void {
    this.OrderService.getProductsByOrderId(this.orderId).subscribe(res=>{
      this.ProductList = res
    })
  }
}
