import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product/product.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    ProductComponent,
    MainPageComponent,
    ProductDetailComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
