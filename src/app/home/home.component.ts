import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductServicesService } from '../services/product-services.service';
import { Product } from '../interfaces/Product';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-home',
  imports: [CategoryComponent, FooterComponent, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductServicesService) {
    this.products = this.productService.getAllProducts().slice(0, 3);
  }
}
