import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApi } from '../interfaces/product-api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
private readonly http = inject(HttpClient);
private apiUrl = 'https://fakestoreapi.com/products';

getProducts(): Observable<ProductApi[]> {
  return this.http.get<ProductApi[]>(this.apiUrl);
}

getProductById(id: number): Observable<ProductApi> {
  return this.http.get<ProductApi>(`${this.apiUrl}/${id}`);
}
}
