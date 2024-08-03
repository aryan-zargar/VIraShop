import { Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component'
import { ProductDetailComponent } from './core/product-detail/product-detail.component'
import { title } from 'process';

export const routes: Routes = [
    {
        path:'products',
        component:MainPageComponent,
        data:{
            title:'خرید'
        }
    },
    {
        path:'product/:id',
        component:ProductDetailComponent,
        data:{
            title:'جزییات محصول'
        }
    }
];
