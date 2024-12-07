import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductsComponent } from './Component/products/products.component';
import { CartComponent } from './Component/cart/cart.component';
import { ResetPassowrdComponent } from './Component/reset-passowrd/reset-passowrd.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { CheckEmailComponent } from './Component/check-email/check-email.component';
import { DashpordComponent } from './Component/dashpord/dashpord.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  { path: 'reset-passowrd', component: ResetPassowrdComponent },
  { path: 'check-email', component: CheckEmailComponent},
  { path: 'dashpord', component: DashpordComponent},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
