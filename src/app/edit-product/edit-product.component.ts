import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product";

import {ProductsService} from "../products/products.service";
import {Response} from "../responce";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
  }

  id: number;
  product = new Product();
  showAlert = false;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe((response: Response) => {
      this.product.id = response.id;
      this.product.productName = response.productName;
      this.product.country = response.country;
      this.product.price = response.price;
      this.product.imageProduct = response.imageProduct;
    })
  }

  updateStudent() {
    this.productService.updateProduct(this.product).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
    });
  }

  closeAlert() {
    this.showAlert = false;
  }


  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe((response) => {
      this.showAlert = true;
    })

  }

  redirect() {
    alert("Deleted")
    window.history.back()
  }
}
