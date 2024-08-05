import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
    this.imageUrl = this.createImageUrlFromHex(this.productImageUrl, contentType);
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
  // productPrice :string = '50,000,000'
}
