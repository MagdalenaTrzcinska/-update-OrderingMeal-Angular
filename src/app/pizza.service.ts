import {Injectable} from '@angular/core';
import {Order, Pizza, Sale} from './pizza';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  selectedPizzaIndex: number;
  selectedSaleIndex: number;
  totalPrice = 0;
  order: Order[] = [];
  discount = 0;
  subjectPizza;
  subjectSale;

  pizzas: Pizza[] = [
    {
      name: 'Margherita',
      ingredients: 'tomato sauce, mozzarella',
      small_Price: 6,
      medium_Price: 10,
      huge_Price: 12
    },

    {
      name: 'Capricciosa',
      ingredients: 'tomato sauce, mozzarella, ham, mushrooms',
      small_Price: 6.50,
      medium_Price: 12,
      huge_Price: 14
    },

    {
      name: 'Pepperoni',
      ingredients: 'tomato sauce, mozzarella, pepperoni sausage',
      small_Price: 7.50,
      medium_Price: 13,
      huge_Price: 15
    },

    {
      name: 'Vegetariana',
      ingredients: 'tomato sauce, tomato, cucumber',
      small_Price: 7.50,
      medium_Price: 13,
      huge_Price: 15
    },
  ];

  sale: Sale[] = [
    {
      name: 'SMALL MARGHERITA',
      info: 'discount for small margherita',
      discount: 40
    },
    {
      name: 'ONE PIZZA',
      info: 'discount for one pizza',
      discount: 15
    },
    {
      name: 'TWO PIZZAS',
      info: 'discount for dwa pizzas',
      discount: 35
    }
  ];

  otherIngredients: Array<string> = ['mozzarella', 'mushrooms', 'pepper',
    'tomato', 'corn', 'olives', 'pineapple', 'ham', 'pepperoni', 'onion',
    'cucumber', 'spinach', 'basil'];

  constructor() {
    this.subjectPizza = new BehaviorSubject<Pizza[]>(this.pizzas);
    this.subjectSale = new BehaviorSubject<Sale[]>(this.sale);
  }
}
