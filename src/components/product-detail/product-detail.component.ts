import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IproductDw } from '../../interfaces/IproductDw';
import { UpdateProductFormComponent } from "../update-product-form/update-product-form.component";
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink, UpdateProductFormComponent, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productId: number = 0

  productWithOuPipe?: IproductDw;
  $product!: Observable<IproductDw>

  displayProduct: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    const id = this.route.snapshot.paramMap.get('id')
    this.productId = Number(id)
  }

  recevoirDonneEnfant(nouvelleValeur: IproductDw): void {
    this.productWithOuPipe = nouvelleValeur
  }

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    this.service.getDwProductById(this.productId).subscribe((response => this.productWithOuPipe = response))
    this.$product = this.service.getDwProductById(this.productId)
  }

  handleUpdateProduct() {
    this.displayProduct = !this.displayProduct
  }



}
