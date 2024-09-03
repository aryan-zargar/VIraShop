import { Component, OnInit } from '@angular/core';
import { InstallmentService } from '../../services/InstallmentPreviewService/installment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {                                                

  public installmentPreviewData:any;

  constructor(private installmentService:InstallmentService){}

  ngOnInit(): void {
    this.installmentPreviewData = this.installmentService.GetInstallmentPreview(1)
    // this.installmentPreviewData.InstallmentPreview = this.installmentPreviewData.InstallmentPreview.find((e: { id: number; })=>e.id == 1) 
    console.log(this.installmentPreviewData)
  }
}
