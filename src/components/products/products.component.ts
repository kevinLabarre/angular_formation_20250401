import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../interfaces/Iproduct';
import { IproductDw } from '../../interfaces/IproductDw';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productId: number = 0

  products: Iproducts[] = []
  productsDw: IproductDw[] = []

  constructor(
    private route: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadAllProducts()
  }

  navigateToProductDetail() {
    this.route.navigate(["/product/", this.productId])
  }

  loadAllProducts() {
    this.loadProducts()
    this.loadDwProducts()
  }

  loadProducts() {
    this.productsService.getProducts().subscribe({
      next: (response: Iproducts[]) => {
        console.log(response)
        this.products = response
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('requete terminée !')
    })
  }

  loadDwProducts() {
    this.productsService.getDwProducts().subscribe({
      next: (response: IproductDw[]) => this.productsDw = response
    })
  }
}
