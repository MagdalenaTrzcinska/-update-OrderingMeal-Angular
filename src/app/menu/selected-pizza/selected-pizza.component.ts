import {Component, OnInit} from '@angular/core';
import {Order, Pizza} from '../../pizza';
import {PizzaService} from '../../pizza.service';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.scss']
})
export class SelectedPizzaComponent implements OnInit{

  selected = {
    pizzaIndex: this.pizzaService.selectedPizzaIndex,
    sizePizza: undefined,
    otherIngredients: ''
  };
  priceForPizza = 0;
  otherIngredients: Array<string>;
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.subjectPizza.subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }

  ngOnInit() {
    this.otherIngredients = this.pizzaService.otherIngredients;
  }

  onCheckSizePizza(size) {
    if (size === 'small') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].smallPrize;
    }
    if (size === 'medium') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].mediumPrize;
    }
    if (size === 'huge') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].hugePrize;
    }
    this.selected.sizePizza = size.toString();
  }

  onAddIngredient($event) {
    if ($event.target.checked) {
      this.priceForPizza += 1.50;
      this.selected.otherIngredients += $event.target.value + ', ';
    } else {
      this.priceForPizza -= 1.50;
    }
  }

  onAddPizza() {
    this.pizzaService.totalPrice += this.priceForPizza;
    this.pizzaService.order.push(
      {
        name: this.pizzas[this.selected.pizzaIndex].name,
        ingredients: this.pizzas[this.selected.pizzaIndex].ingredients,
        otheringredients: this.selected.otherIngredients,
        size: this.selected.sizePizza,
        prize: this.priceForPizza,
      });
    alert('added');
  }
}
