import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  {
    path: "product-list",
    component: ProductListComponent
  },
  {
    path: "add-product",
    component: AddProductComponent
  },
  {
    path: "edit-product/:id",
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
