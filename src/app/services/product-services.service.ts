import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
 private products: Product[] = [
    {
      id: 1,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      productName: 'Fjallraven - Foldsack No. 1 Backpack',
      productPrice: 109.95,
      onSale: true
    },
    {
      id: 2,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      productName: 'Mens Casual Premium Slim Fit T-Shirts',
      productPrice: 22.3,
      onSale: false
    },
    {
      id: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      productName: 'Mens Cotton Jacket',
      productPrice: 55.99,
      onSale: true
    },
    {
      id: 4,
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      productName: 'Mens Cotton Jacket',
      productPrice: 55.99,
      onSale: false
    },
    {
      id: 5,
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      productName: 'Mens Cotton Jacket',
      productPrice: 55.99,
      onSale: true
    },
    {
      id: 6,
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      productName: 'Mens Cotton Jacket',
      productPrice: 55.99,
      onSale: true
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }
}
