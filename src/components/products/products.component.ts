import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../interfaces/Iproduct';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productId: number = 0

  products: Iproducts[] = []

  constructor(
    private route: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  navigateToProductDetail() {
    this.route.navigate(["/product/", this.productId])
  }

  loadData() {
    this.productsService.getProducts().subscribe({
      next: (response: Iproducts[]) => {
        console.log(response)
        this.products = response
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('requete terminée !')
    })
  }



}
