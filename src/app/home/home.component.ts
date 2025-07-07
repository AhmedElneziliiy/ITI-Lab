import { Component, inject } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductServicesService } from '../services/product-services.service';
import { Product } from '../interfaces/Product';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductApi } from '../interfaces/product-api';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  imports: [CategoryComponent, FooterComponent, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
products: ProductApi[] = [];
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products.slice(0, 3); // Limit to 3 products
        console.log('Products fetched in HomeComponent:', this.products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
