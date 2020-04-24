import {Component, OnInit} from '@angular/core';
import {Pizza, Sale} from "../pizza";
import {PizzaService} from "../pizza.service";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  which = 0;
  sales: Sale[];
  ifChosenThisPizza = false;
  nrSale: number;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.sales = this.pizzaService.sale;
  }

  onChoose(i) {
    if (this.which === 1) {
      alert('the discount has already been selected');
    } else {
      if (i === 0) {
        for (let j = 0; j < this.pizzaService.order.length; j++) {
          if (this.pizzaService.order[j].name === 'Margherita' && this.pizzaService.order[j].size === 'small') {
            this.ifChosenThisPizza = true;
            this.nrSale = i;
            this.choose();
          }
        }
        if (this.ifChosenThisPizza === false) {
          alert('small margharity was not chosen');
        }
      }
      if (i === 1) {
        if (this.pizzaService.order.length === 1) {
          this.ifChosenThisPizza = true;
          this.nrSale = i;
          this.choose();
        } else {
          alert('no one pizza selected');
        }
      }
      if (i === 2) {
        if (this.pizzaService.order.length === 2) {
          this.ifChosenThisPizza = true;
          this.nrSale = i;
          this.choose();
        } else {
          alert('only two pizzas were not selected');
        }
      }
    }
  }

  choose() {
    if (this.which !== 1 && this.ifChosenThisPizza === true) {
      alert('added');
      this.which = 1;
      this.pizzaService.numberSale = this.nrSale;

      this.pizzaService.howMuchLess = (this.pizzaService.total * (this.pizzaService.sale[this.pizzaService.numberSale].discount / 100));
      this.pizzaService.howMuchLess = Math.round(this.pizzaService.howMuchLess * 100) / 100;
      this.pizzaService.total -= this.pizzaService.howMuchLess;
    } else {
      alert('the discount has already been selected');
    }
  }
}
