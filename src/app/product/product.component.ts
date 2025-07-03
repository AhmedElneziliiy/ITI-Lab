import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component'; // Updated path
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [
    {
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      productName: 'Fjallraven - Foldsack No. 1 Backpack',
      productPrice: 109.95,
      onSale: true
    },
    {
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      productName: 'Mens Casual Premium Slim Fit T-Shirts',
      productPrice: 22.3,
      onSale: false
    },
    {
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      productName: 'Mens Cotton Jacket',
      productPrice: 55.99,
      onSale: true
    }
  ];
}