import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./app/product-list/product-list.component";
import {EditProductComponent} from "./app/edit-product/edit-product.component";

const routes: Routes = [
  {
    path: "product-list",
    component: ProductListComponent
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
