import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  getProductList() {
    return this.http.get(this.baseUrl + "/products");
  }

  getProduct(id) {
    return this.http.get(this.baseUrl + "/products/" + id);
  }

  deleteProduct(id) {
    return this.http.delete(this.baseUrl + "/products/" + id);
  }

  updateProduct(product: Product) {
    return this.http.put(this.baseUrl + "/products", product);
  }

  createProduct(product: Product) {
    return this.http.post(this.baseUrl + "/products", product);
  }

}
