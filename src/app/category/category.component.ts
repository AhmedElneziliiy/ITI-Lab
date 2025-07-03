import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
@Component({
  selector: 'app-category',
  imports: [ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
items: category[] = [
    { image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg', price: 100 },
    { image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', price: 100 },
    { image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', price: 100 }
  ];
}

export interface category {
  image: string;
  price: number;
}
