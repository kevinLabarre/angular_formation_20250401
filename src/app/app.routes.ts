import { Routes } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { DescriptionComponent } from '../components/description/description.component';
import { FicheTechComponent } from '../components/fiche-tech/fiche-tech.component';
import { DevisComponent } from '../components/devis/devis.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    children: [
      { path: 'description', component: DescriptionComponent },    // accessible sur '/product/:id/description'
      { path: 'ficheTech', component: FicheTechComponent },
      { path: 'devis', component: DevisComponent }
    ]
  },
];
