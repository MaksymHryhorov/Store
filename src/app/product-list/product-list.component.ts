import { Component, OnInit } from '@angular/core';
import {Product} from "../../product";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void{
    this.productService.getProductList().subscribe((response: any) => {
      this.products = response;
    })
  }

  public searchProducts(key: string): void {
    const result: Product[] = [];
    for (const product of this.products) {
      if (product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.country.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.price.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.imageProduct.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(product);
      }
    }

    this.products = result;

    if (result.length === 0 || !key) {
      this.getProducts();
    }
  }
}
