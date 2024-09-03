import { Component } from '@angular/core';
import { InstallmentService } from '../../services/InstallmentPreviewService/installment.service';
import { OrdersService } from '../../services/Orders/orders.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from "moment-jalaali";

@Component({
  selector: 'app-installment-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './installment-list.component.html',
  styleUrl: './installment-list.component.scss'
})
export class InstallmentListComponent {
  public product_installment:any;
  constructor(private orderService:OrdersService){
    orderService.getOrderInstallments().subscribe(res=>{
      this.product_installment = res.ContractInstallment
    })
  }
  public formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  public convertGregoryDateToJalali(date: string) {
    var m = moment(date)
    return m.format('jYYYY/jMM/jDD')
  }
}
