import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import e from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public handleMenuClick(){
    var element:any = document.getElementById('menu')
    if(element?.style.display == 'none'){
      element.style.display = 'block'
    }
    else{
      element.style.display = 'none'
    }
  }
}
