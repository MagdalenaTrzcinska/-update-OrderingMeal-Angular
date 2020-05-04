import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza.service";
import {Pizza} from "../pizza";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  pizzas: Pizza[];


  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.pizzas;
  }

  onChoose(i) {
    this.pizzaService.numberPizza = i;
  }

}
