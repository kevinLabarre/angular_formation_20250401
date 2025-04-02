import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productId: number = 0

  constructor(private route: Router) {
  }

  navigateToProductDetail() {
    this.route.navigate(["/product/", this.productId])
  }

}
