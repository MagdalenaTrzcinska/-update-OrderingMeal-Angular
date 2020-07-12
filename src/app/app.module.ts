import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import { SalePageComponent } from './sale-page/sale-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SelectedPizzaComponent } from './menu/selected-pizza/selected-pizza.component';
import {FormsModule} from '@angular/forms';
import { OrderingDetailsComponent } from './ordering-details/ordering-details.component';
import { OrderInformationComponent } from './ordering-details/order-information/order-information.component';
import { SelectedPizzaDirective } from './selected-pizza.directive';
import { MenuComponent } from './menu/menu.component';
import {PhotoChangeDirective} from './main-page/photo-change.directive';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'sale', component: SalePageComponent},
  {path: 'order', component: OrderPageComponent},
  {path: 'selectedPizza', component: SelectedPizzaComponent},
  {path: 'orderingDetails', component: OrderingDetailsComponent},
  {path: 'information', component: OrderInformationComponent},
  {path: '', component: MainPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SalePageComponent,
    OrderPageComponent,
    SelectedPizzaComponent,
    OrderingDetailsComponent,
    OrderInformationComponent,
    SelectedPizzaDirective,
    PhotoChangeDirective,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes, {enableTracing: true}),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
