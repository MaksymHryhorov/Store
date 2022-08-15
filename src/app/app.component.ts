import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'product-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

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
