import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ProductApi } from '../interfaces/product-api';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product!: ProductApi ;
  private _productService = inject(ProductService);
  private _route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    console.log('ProductDetailsComponent: Fetching product with ID:', id);
    if (id) {
      this._productService.getProductById(id).subscribe({
        next: (product) => {
          console.log('elneezo', product);
          this.product = product;
        },
        error: (error) => {
          console.error('Error fetching product:', error);
        }
      });
    } else {

      console.error('Invalid product ID:', id);
    }
  }
// constructor(private router: Router) {
//   const navigation = this.router.getCurrentNavigation();
//   if (navigation?.extras?.state?.['product']) {
//       this.product = navigation.extras.state['product'] as ProductApi;
//       console.log('product ok:', this.product);
//   } else {
//     console.error('No product ');
//     }
//   }
}
