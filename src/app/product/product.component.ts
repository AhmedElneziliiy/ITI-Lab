import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/Product';
import { ProductServicesService } from '../services/product-services.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductServicesService) {
    this.products = this.productService.getAllProducts();
  }

}