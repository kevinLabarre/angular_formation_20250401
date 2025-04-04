import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IproductDw } from '../../interfaces/IproductDw';

@Component({
  selector: 'app-update-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './update-product-form.component.html',
  styleUrl: './update-product-form.component.css'
})
export class UpdateProductFormComponent implements OnChanges {

  productForm: FormGroup;

  @Input() product?: IproductDw

  constructor() {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(0),
      image: new FormControl(''),
      description: new FormControl(''),
      slug: new FormControl(''),
      category: new FormControl('')
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      if (this.product) {
        this.productForm.patchValue({
          id: this.product.id,
          title: this.product.title,
          price: this.product.price,
          image: this.product.image,
          description: this.product.description,
          slug: this.product.slug,
          category: this.product.category,

        })
      }
    }
  }

  onSubmit() {
    this.productForm.value
  }

}
