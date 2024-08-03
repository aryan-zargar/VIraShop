import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/Product/product.service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  public id:number = 0;
  public productDetail:any;
  constructor(public route: ActivatedRoute,public service:ProductService) {
    route.params.subscribe(params => {
      this.id = params['id'];
    }); 
    this.productDetail = service.GetProductDetail(this.id)
    console.log(this.productDetail)
  }

}
