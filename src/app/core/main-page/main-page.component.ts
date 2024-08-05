import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component'
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/Product/product.service';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProductComponent,CommonModule,HttpClientModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {  

  public productList:any;
  public _service:any;
  public Loading:boolean=true;
  constructor(private productService : ProductService){
    this._service = productService;
  }
  ngOnInit(): void {
    this.productList = this._service.getProducts()
    console.log(this.productList)
    if(this.productList != null){
      this.Loading= false
    }
  }

  public redirectToProductDetail(id:any){
    window.location.pathname = `product/${id}`
  }
}
