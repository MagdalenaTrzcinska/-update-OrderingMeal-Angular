import {Injectable} from '@angular/core';
import {Order, Pizza, Sale} from './pizza';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  selectedPizzaIndex: number;
  selectedSaleIndex: number;
  nrSale: number;
  subjectPizza;
  subjectSale;
  order: Order[] = [];
  totalPrice = 0;
  discount = 0;
  priceForPizza = 0;
  howManyDiscounts = 0;
  isChosenThisPizza = false;
  selected = {
    pizzaIndex: this.selectedPizzaIndex,
    sizePizza: undefined,
    otherIngredients: ''
  };

  pizzas: Pizza[];

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

  constructor(private http: HttpClient) {
    this.fetchPizzas();
    this.subjectPizza = new BehaviorSubject<Pizza[]>(this.pizzas);
    this.subjectSale = new BehaviorSubject<Sale[]>(this.sale);
  }
  fetchPizzas() {
    this.http.get<Pizza[]>('https://pizza-b4bb4.firebaseio.com/pizzas.json')
      .subscribe(pizzas => {
        this.pizzas = pizzas;
      });
  }


  pickedSizeOfPizza(size) {
    if (size === 'small') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].small_Price;
    }
    if (size === 'medium') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].medium_Price;
    }
    if (size === 'huge') {
      this.priceForPizza += this.pizzas[this.selected.pizzaIndex].huge_Price;
    }
    this.selected.sizePizza = size.toString();
  }

  additionOfSelectedIngredients($event) {
    if ($event.target.checked) {
      this.priceForPizza += 1.50;
      this.selected.otherIngredients += $event.target.value + ', ';
    } else {
      this.priceForPizza -= 1.50;
    }
  }

  additionOfPizza() {
    this.totalPrice += this.priceForPizza;
    this.addingPizzaToTheOrder();
  }

  addingPizzaToTheOrder() {
    this.order.push(
      {
        name: this.pizzas[this.selected.pizzaIndex].name,
        ingredients: this.pizzas[this.selected.pizzaIndex].ingredients,
        other_Ingredients: this.selected.otherIngredients,
        size: this.selected.sizePizza,
        price: this.priceForPizza,
      });
    alert('added');
  }

  pickedPromotion(numberSale: number) {
    if (this.howManyDiscounts === 1) {
      alert('the discount has already been selected');
    } else {
      this.nrSale = numberSale;
      if (numberSale === 0) {
        for (const pizza of this.order) {
          if (pizza.name === 'Margherita' && pizza.size === 'small') {
            this.whenSelectedPizza();
          }
        }
        if (this.isChosenThisPizza === false) {
          alert('small margherita was not chosen');
        }
      }
      if (numberSale === 1) {
        if (this.order.length === 1) {
          this.whenSelectedPizza();
        } else {
          alert('choose one pizza');
        }
      }
      if (numberSale === 2) {
        if (this.order.length === 2) {
          this.whenSelectedPizza();
        } else {
          alert('choose two pizzas');
        }
      }
    }
  }

  whenSelectedPizza() {
    this.isChosenThisPizza = true;
    this.whetherThePromotionHasBeenSelected();
  }

  whetherThePromotionHasBeenSelected() {
    if (this.howManyDiscounts !== 1 && this.isChosenThisPizza === true) {
      this.onceSelected();
    } else {
      alert('the discount has already been selected');
    }
  }

  onceSelected(){
    this.howManyDiscounts = 1;
    this.selectedSaleIndex = this.nrSale;
    this.discount = (this.totalPrice * (this.sale[this.selectedSaleIndex].discount / 100));
    this.discount = Math.round(this.discount * 100) / 100;
    this.totalPrice -= this.discount;
    alert('added');
  }
}

