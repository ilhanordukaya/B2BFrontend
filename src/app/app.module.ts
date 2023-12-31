import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ProductsModule } from './admin/products/products.module';
import { AuthInterceptor } from './admin/login/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    BrowserModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    }),
 
  ],
  providers: [ 
    { provide: 'apiUrl', useValue:'https://localhost:7146/api/'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
