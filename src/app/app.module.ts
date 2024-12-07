import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NavComponent } from './Component/nav/nav.component';
import { ProductsComponent } from './Component/products/products.component';
import { CartComponent } from './Component/cart/cart.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPassowrdComponent } from './Component/reset-passowrd/reset-passowrd.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { CheckEmailComponent } from './Component/check-email/check-email.component';
import { DashpordComponent } from './Component/dashpord/dashpord.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    ResetPassowrdComponent,
    NotFoundComponent,
    CheckEmailComponent,
    DashpordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
