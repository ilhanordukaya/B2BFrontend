import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductPipe } from './pipe/product.pipe';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes:Routes=
[
  {
  path:'',
  component:ProductsComponent
  }
]


@NgModule({
  declarations: [
    ProductsComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SweetAlert2Module.forRoot(),
    //ProductImagesModule
  ],
  exports:
  [
    ProductsComponent
  ]
})
export class ProductsModule { }
