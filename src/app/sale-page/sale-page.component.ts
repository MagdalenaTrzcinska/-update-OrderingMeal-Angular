import {Component, OnInit} from '@angular/core';
import {Sale} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit{
  howManyDiscounts = 0;
  sales: Sale[];
  isChosenThisPizza = false;
  nrSale: number;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.subjectSale.subscribe(sale => {
      this.sales = sale;
    });
  }

  onChooseSale(numberSale: number) {
    if (this.howManyDiscounts === 1) {
      alert('the discount has already been selected');
    } else {
      this.nrSale = numberSale;
      if (numberSale === 0) {
        for (const pizza of this.pizzaService.order) {
          if (pizza.name === 'Margherita' && pizza.size === 'small') {
            this.whenSelectedPizza();
          }
        }
        if (this.isChosenThisPizza === false) {
          alert('small margherita was not chosen');
        }
      }
      if (numberSale === 1) {
        if (this.pizzaService.order.length === 1) {
          this.whenSelectedPizza();
        } else {
          alert('choose one pizza');
        }
      }
      if (numberSale === 2) {
        if (this.pizzaService.order.length === 2) {
          this.whenSelectedPizza();
        } else {
          alert('choose two pizzas');
        }
      }
    }
  }

  whenSelectedPizza() {
    this.isChosenThisPizza = true;
    this.addingADiscountToTheOrder();
  }

  addingADiscountToTheOrder() {
    if (this.howManyDiscounts !== 1 && this.isChosenThisPizza === true) {
      this.howManyDiscounts = 1;
      this.pizzaService.selectedSaleIndex = this.nrSale;
      this.pizzaService.discount = (this.pizzaService.totalPrice *
        (this.pizzaService.sale[this.pizzaService.selectedSaleIndex].discount / 100));
      this.pizzaService.discount = Math.round(this.pizzaService.discount * 100) / 100;
      this.pizzaService.totalPrice -= this.pizzaService.discount;
      alert('added');
    } else {
      alert('the discount has already been selected');
    }
  }
}
