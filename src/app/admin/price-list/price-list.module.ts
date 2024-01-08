import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PriceListDetailModule } from './price-list-detail/price-list-detail.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { PriceListPipe } from './pipe/price-list.pipe';

const routes :Routes=[
  {
    path:"",
    component:PriceListComponent
  }
]

@NgModule({
  declarations: [
    PriceListComponent,
    PriceListPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SweetAlert2Module,
    PriceListDetailModule
  ],
  exports:[
    PriceListComponent,
    PriceListDetailModule

  ]
})
export class PriceListModule { }
