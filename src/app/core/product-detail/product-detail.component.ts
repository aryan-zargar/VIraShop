import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/Product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule,MatButtonModule,MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})

export class ProductDetailComponent implements OnInit {
  public id: number = 0;
  public productDetail: any;
  public isEditing: boolean = false;
  public imageUrl: string | null = null;
  public protocols: any;
  constructor(public route: ActivatedRoute, public service: ProductService) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productDetail = service.GetProductDetail(this.id)
    this.protocols = service.getSellPlans()
    console.log(this.productDetail)
    console.log(this.protocols)

    const contentType = 'image/png'; // Change based on your image type
    this.imageUrl = this.productDetail.imageUrl

  }
  ngOnInit(): void {

  }
  public EditProduct() {
    this.service.EditProduct(this.id, this.productDetail)
    this.isEditing = false
  }
  public ToggleEditing() {
    if (this.isEditing == true) {
      this.isEditing = false

    }
    else {
      this.isEditing = true
    }
    console.log(this.productDetail)
  }


  public scrollSmoothTo(elementId: string) {
    var element: any;
    element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  public numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
