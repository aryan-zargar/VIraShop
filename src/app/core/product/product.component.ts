import { Component, Input, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  // productTitle: string = 'تنظیمات'
  @Input() productTitle!:string;
  @Input() productPrice!:string;
  @Input() productImageUrl!:string;
  public imageUrl:any;

  public ngOnInit(): void {
    const contentType = 'image/png'; // Change based on your image type
    this.imageUrl =this.productImageUrl
  }

  
  // productPrice :string = '50,000,000'

  public numberWithCommas(x:string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
