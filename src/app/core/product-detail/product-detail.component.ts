import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/Product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  public id:number = 0;
  public productDetail:any;
  public isEditing:boolean = false;
  public imageUrl: string | null = null;
  constructor(public route: ActivatedRoute,public service:ProductService) {
    route.params.subscribe(params => {
      this.id = params['id'];
    }); 
    this.productDetail = service.GetProductDetail(this.id)
    console.log(this.productDetail)
    const contentType = 'image/png'; // Change based on your image type
    this.imageUrl = this.createImageUrlFromHex(this.productDetail.imageUrl, contentType);
  }

  public EditProduct(){
    this.service.EditProduct(this.id,this.productDetail)
    this.isEditing = false
  }
  public ToggleEditing(){
    if(this.isEditing == true){
      this.isEditing = false
      
    }
    else{
      this.isEditing = true
    }
    console.log(this.productDetail)
  }
  public hexToBytes(hex: string): Uint8Array {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return new Uint8Array(bytes);
  }
  
  public hexToBlob(hex: string, contentType: string): Blob {
    const bytes = this.hexToBytes(hex);
    return new Blob([bytes], { type: contentType });
  }
  
  public createImageUrlFromHex(hex: string, contentType: string): string {
    const blob = this.hexToBlob(hex, contentType);
    return URL.createObjectURL(blob);
  }

  public scroll(id:string){
    document.getElementById(id)?.scrollIntoView(true)
  }
}
