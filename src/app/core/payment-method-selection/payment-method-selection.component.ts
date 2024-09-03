import { Component } from '@angular/core';
import { CompanyDetailService } from '../../services/CompanyDetail/company-detail.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio'
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
@Component({
  selector: 'app-payment-method-selection',
  standalone: true,
  imports: [MatButtonModule,MatRadioModule,MatIconModule,CommonModule,FormsModule,MatRippleModule],
  templateUrl: './payment-method-selection.component.html',
  styleUrl: './payment-method-selection.component.scss'
})
export class PaymentMethodSelectionComponent {
  public selectedMethod:any;
  public companyDetail :any;
  constructor(private CompanyDetailService:CompanyDetailService){
    this.companyDetail = CompanyDetailService.getCompanyDetail()
  }
}
