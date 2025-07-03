import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
@Input() product!: Product;

}
