import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IproductDw } from '../../interfaces/IproductDw';
import { UpdateProductFormComponent } from "../update-product-form/update-product-form.component";

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink, UpdateProductFormComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productId: number = 0

  product?: IproductDw;
  displayProduct: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    const id = this.route.snapshot.paramMap.get('id')
    this.productId = Number(id)
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    this.service.getDwProductById(this.productId).subscribe((response => this.product = response))
  }

  handleUpdateProduct() {
    this.displayProduct = !this.displayProduct
  }

}
