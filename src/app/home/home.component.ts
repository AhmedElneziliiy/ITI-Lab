import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductComponent } from "../product/product.component";
import { CategoryComponent } from "../category/category.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProductComponent, CategoryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
