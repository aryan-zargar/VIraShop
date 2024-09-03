import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductService } from '../../services/Product/product.service';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { CompanyDetailService } from '../../services/CompanyDetail/company-detail.service';

@Component({
  selector: 'app-starter-page',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatExpansionModule,ProductComponent,CommonModule],
  templateUrl: './starter-page.component.html',
  styleUrl: './starter-page.component.scss'
})
export class StarterPageComponent {
  public ProductList= [];
  public detail:any;
  public imageUrl:any;
  constructor(private ProductService:ProductService,private CompanyDetailService:CompanyDetailService){
    this.ProductList = this.ProductService.getProducts()
    this.ProductList = this.ProductList.slice(0,3)
    this.detail = CompanyDetailService.getCompanyDetail();
    this.imageUrl = `data:image/png;base64,${this.detail.BackgroundImage}`
  }
  public redirectToProductDetail(id: any) {
    window.location.pathname = `product/${id}`
  }
}
