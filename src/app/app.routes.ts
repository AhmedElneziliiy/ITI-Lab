import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          
  { path: 'products', component: ProductComponent }, 
  { path: 'category', component: CategoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component:NotFoundComponent }  
];
