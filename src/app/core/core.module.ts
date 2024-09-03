import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product/product.component'
import { MainPageComponent } from './main-page/main-page.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductComponent,
    MainPageComponent,
    ProductDetailComponent,
    UserProfileComponent,MatInputModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
