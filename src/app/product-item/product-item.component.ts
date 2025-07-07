import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductApi } from '../interfaces/product-api';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-item',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {

  @Input() productApi!:ProductApi;
  
  ngOnInit(): void {
    console.log('ok :', this.productApi);
  }
}
