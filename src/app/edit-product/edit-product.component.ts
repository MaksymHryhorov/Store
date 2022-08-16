import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }
  id: number;
  product = new Product();

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe((response: any) => {
      this.product = response.id;
    })
  }


}
