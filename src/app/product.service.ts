import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/products', product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>('/products', product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>('/products/${productId}');
  }

}
