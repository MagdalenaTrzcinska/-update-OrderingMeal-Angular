import {Component} from '@angular/core';
import {PizzaService} from '../pizza.service';
import {Pizza} from '../pizza';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.subjectPizza.subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }
}
