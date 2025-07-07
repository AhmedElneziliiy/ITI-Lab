import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductApi } from '../interfaces/product-api';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: ProductApi[] = [];
  topThreeProducts: ProductApi[] = [];
  remainingProducts: ProductApi[] = [];
  showRemainingProducts: boolean = false;

  private _productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log('All Products:', this.products);

        this.topThreeProducts = this.getTopThreeRatedProducts();
        console.log('Top 3 Rated Products:', this.topThreeProducts);

        this.remainingProducts = this.products.filter(
          product => !this.topThreeProducts.some(top => top.id === product.id)
        );
        console.log('Remaining products:', this.remainingProducts);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  getTopThreeRatedProducts(): ProductApi[] {
    return this.products
      .slice()
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3);
  }
    loadRemainingProducts(): void {
    this.showRemainingProducts = true;
  }
}