import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // productTitle: string = 'تنظیمات'
  @Input() productTitle!:string;
  @Input() productPrice!:string;
  @Input() productImageUrl!:string;

  // productPrice :string = '50,000,000'
}
