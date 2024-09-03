import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component'
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/Product/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProductComponent, CommonModule, HttpClientModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  public ProductNotFound:boolean=false;
  public searchKeyWord: string = "";
  public IsNextDisabled: boolean = false;
  public IsLastDisabled: boolean = false;
  public productList: any[];
  public searchedProductList: any;
  public searchedProductListWithOutPagination: any;
  public _service: any;
  public pageCount: number = 1;
  public Loading: boolean = true;
  constructor(private productService: ProductService) {
    this._service = productService;
  }
  ngOnInit(): void {
    this.productList = this._service.getProducts()
    console.log(this.productList)
    if (this.productList != null) {
      setTimeout(() => {
        this.Loading = false
      }, 1000);
      this.searchedProductList = this.productList
      this.searchedProductListWithOutPagination = this.productList
      this.paginate()
      this.scrollSmoothTo('search')
    }
  }

  public redirectToProductDetail(id: any) {
    window.location.pathname = `product/${id}`
  }

  public scrollSmoothTo(elementId: string) {
    var element: any;
    element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  public nextPagination() {
    this.pageCount += 1
    this.paginate()
  }
  public lastPagination() {
    this.pageCount -= 1
    this.paginate()
  }
  public CheckPaginate() {
    // alert(this.searchedProductList.length)
    if (this.pageCount * 20 + 1 > this.searchedProductListWithOutPagination.length) {
      this.IsNextDisabled = true
    } else {
      this.IsNextDisabled = false
    }

    if (this.pageCount == 1) {
      this.IsLastDisabled = true
    } else {
      this.IsLastDisabled = false
    }
  }
  public paginate() {
    var cacheSearchedProduct = this.searchedProductListWithOutPagination
    if (cacheSearchedProduct.length < this.pageCount * 20) {
      var theSecondCount = ((this.pageCount - 1) * 20) + (cacheSearchedProduct.length - ((this.pageCount - 1) * 20))
      this.searchedProductList = cacheSearchedProduct.slice((this.pageCount - 1) * 20, theSecondCount)
    } else {
      this.searchedProductList = cacheSearchedProduct.slice((this.pageCount - 1) * 20, this.pageCount * 20)
    }
    this.CheckPaginate()
    this.Loading = true;
    setTimeout(() => {
      this.Loading = false;
    }, 300);
  }

  public searchInProducts(keyWord: string) {
    this.ProductNotFound = false;
    console.log(keyWord)
    this.searchedProductList = _.filter(this.productList, (e) => e.name.includes(keyWord))
    this.searchedProductListWithOutPagination = this.searchedProductList
    this.pageCount = 1
    this.CheckPaginate()
    this.paginate()
    this.Loading = true
    setTimeout(() => {
      this.Loading = false;
    }, 300);
    if(this.searchedProductListWithOutPagination.length==0){
      this.ProductNotFound = true;
    }
  }

  public SortByLowestPrice() {
    console.log(this.searchKeyWord)
    if (this.searchKeyWord) {
      var cacheSearchedProduct = _.filter(this.productList,(e)=>e.name.includes(this.searchKeyWord))
    }else{
      var cacheSearchedProduct = this.productList
    }
    this.searchedProductList = _.sortBy(cacheSearchedProduct, function (o) { return o.Price })
    this.searchedProductListWithOutPagination = _.sortBy(cacheSearchedProduct, function (o) { return o.Price })
    this.paginate();
  }
  public SortByHighestPrice() {
    console.log(this.searchKeyWord)
    if (this.searchKeyWord) {
      var cacheSearchedProduct = _.filter(this.productList,(e)=>e.name.includes(this.searchKeyWord))
    }else{
      var cacheSearchedProduct = this.productList
    }
    var UnreversedList = (_.sortBy(cacheSearchedProduct, function (o) { return o.Price }))
    this.searchedProductList,this.searchedProductListWithOutPagination = _.reverse(UnreversedList)
    this.paginate()
  }
  public SortByDefault() {
    var cacheSearchedProduct = this.searchedProductList
    this.searchedProductList = _.sortBy(cacheSearchedProduct, ['id'])

  }
}
