import {Component, OnInit} from '@angular/core';
import {Order, Pizza} from '../../pizza';
import {PizzaService} from '../../pizza.service';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.scss']
})
export class SelectedPizzaComponent implements OnInit {
  selected = {
    pizzaIndex: undefined,
    sizePizza: undefined,
    otherIngredients: ''
  };

  priceForPizza;
  otherIngredients: Array<string>;
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.subjectPizza.subscribe(pizzas => {
      this.pizzas = pizzas;
    });

    this.pizzas = this.pizzaService.pizzas;
    this.otherIngredients = this.pizzaService.otherIngredients;
    this.priceForPizza = this.pizzaService.priceForPizza;
    this.selected = this.pizzaService.selected;
  }

  onPickedPromotion(size) {
    this.pizzaService.pickedSizeOfPizza(size);
  }

  onAdditionOfSelectedIngredients($event) {
    this.pizzaService.additionOfSelectedIngredients($event);
  }

  onAdditionOfPizza() {
    this.pizzaService.additionOfPizza();
  }

}
