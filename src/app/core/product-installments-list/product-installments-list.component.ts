import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/Orders/orders.service';
import { CommonModule } from '@angular/common';
import moment from "moment-jalaali";
@Component({
  selector: 'app-product-installments-list',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './product-installments-list.component.html',
  styleUrl: './product-installments-list.component.scss'
})
export class ProductInstallmentsListComponent implements OnInit {
  public OrderId: number = 0;
  public installmentsList: any;
  public ProductList: any;
  constructor(private route: ActivatedRoute, private orderService: OrdersService) {
    route.params.subscribe(params => {
      this.OrderId = params['id'];
    });
  }

  ngOnInit(): void {
    this.orderService.getOrderInstallmentsbyOrderId(this.OrderId).subscribe(res => {
      this.installmentsList = res
      console.log(this.installmentsList)

    })
    this.orderService.getProducts().subscribe(res => {
      this.ProductList = res
    }
    )
  }
  public getProductById(ProductId: number) {
    return this.ProductList.find((e: { id: number; }) => e.id == ProductId)
  }
  public convertGregoryDateToJalali(date: string) {
    var m = moment(date)
    return m.format('jYYYY/jMM/jDD')
  }
  public formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
