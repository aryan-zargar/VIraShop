import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product/product.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'

@NgModule({
  declarations: [
    ProductComponent,
    MainPageComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
