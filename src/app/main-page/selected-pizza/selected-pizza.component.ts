import {Component, OnChanges, OnInit} from '@angular/core';
import {Order, Pizza} from "../../pizza";
import {PizzaService} from "../../pizza.service";

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.scss']
})
export class SelectedPizzaComponent implements OnInit, OnChanges {

  numberPizza: number;
  pizzas: Pizza[];
  sum = 0;
  which = 0;
  otherIngredients: Array<string>;

  additionalIngredients = '';
  size: string;
  order: Order[] = [];

  constructor(private pizzaService: PizzaService) {
  }


  check(i) {

    if (i == 0) {
      this.sum += this.pizzas[this.numberPizza].smallPrize;
      this.size = 'small';

    }
    if (i == 1) {
      this.sum += this.pizzas[this.numberPizza].mediumPrize;
      this.size = 'medium';

    }
    if (i == 2) {
      this.sum += this.pizzas[this.numberPizza].hugePrize;
      this.size = 'huge';
    }
  }

  onIngredient($event) {
    if ($event.target.checked) {
      this.sum += 1.50;
      this.additionalIngredients += $event.target.value + ', ';
    } else {
      this.sum -= 1.50;
    }
  }

  onAddPizza() {
    this.pizzaService.total += this.sum;

    this.pizzaService.order.push(
      {
        name: this.pizzas[this.numberPizza].name,
        ingredients: this.pizzas[this.numberPizza].ingredients,
        otheringredients: this.additionalIngredients,
        size: this.size,
        prize: this.sum,
      });

    alert('added');
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.pizzas;
    this.numberPizza = this.pizzaService.numberPizza;
    this.otherIngredients = this.pizzaService.otherIngredients;
  }

  ngOnChanges(): void {
    this.pizzas = this.pizzaService.pizzas;

  }


}
