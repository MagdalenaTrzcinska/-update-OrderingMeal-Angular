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
      smallPrize: 6,
      mediumPrize: 10,
      hugePrize: 12
    },
    {
      name: 'Capricciosa',
      ingredients: 'tomato sauce, mozzarella, ham, mushrooms',
      smallPrize: 6.50,
      mediumPrize: 12,
      hugePrize: 14
    },
    {
      name: 'Pepperoni',
      ingredients: 'tomato sauce, mozzarella, pepperoni sausage',
      smallPrize: 7.50,
      mediumPrize: 13,
      hugePrize: 15
    },
    {
      name: 'Vegetariana',
      ingredients: 'tomato sauce, tomato, cucomber',
      smallPrize: 7.50,
      mediumPrize: 13,
      hugePrize: 15
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
