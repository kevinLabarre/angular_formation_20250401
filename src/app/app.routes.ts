import { Routes } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
