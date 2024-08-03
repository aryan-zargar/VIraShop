import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ProductDTO from '../../models/Products.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts(){
    var _result ;
    this.http.get<ProductDTO>('http://127.0.0.1:8000/products').subscribe(res=>{
      _result = res
    })
    return _result
  }

  public GetProductDetail(id:number){
    var _result ;
    this.http.get('http://127.0.0.1:8000/product/'+id).subscribe(res=>{
      _result = res
    })
    return _result
  }
}
