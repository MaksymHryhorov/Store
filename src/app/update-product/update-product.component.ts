import { Component, OnInit } from '@angular/core';
import {Product} from "../../product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products/products.service";
import {Response} from "../responce";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  product = new Product();
  showAlert = false;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
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

  redirect() {
    alert("Updated")
    window.history.back()
  }
}
