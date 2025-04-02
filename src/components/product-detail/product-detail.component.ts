import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  productId: number = 0

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')
    this.productId = Number(id)
  }


}
