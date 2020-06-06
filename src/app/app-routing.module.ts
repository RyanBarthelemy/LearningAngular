/* https://angular.io/guide/router */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccommodationComponent} from './accommodation/accommodation.component';
import {CelebrationsComponent} from './celebrations/celebrations.component';
import {FoodAndBeverageComponent} from './food-and-beverage/food-and-beverage.component';
import {LifestyleComponent} from './lifestyle/lifestyle.component';
import {OffersComponent} from './offers/offers.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {HomeComponent} from './home/home.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component'; // CLI imports router

const routes: Routes = [
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
