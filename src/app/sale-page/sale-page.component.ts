import {Component, OnInit} from '@angular/core';
import {Sale} from "../pizza";
import {PizzaService} from "../pizza.service";

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  howManyDiscounts = 0;
  sales: Sale[];
  isChosenThisPizza = false;
  nrSale: number;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.sales = this.pizzaService.sale;
  }

  onChoose(i) {
    if (this.howManyDiscounts === 1) {
      alert('the discount has already been selected');
    } else {
      if (i === 0) {
        for (let j = 0; j < this.pizzaService.order.length; j++) {
          if (this.pizzaService.order[j].name === 'Margherita' && this.pizzaService.order[j].size === 'small') {
            this.isChosenThisPizza = true;
            this.nrSale = i;
            this.choose();
          }
        }
        if (this.isChosenThisPizza === false) {
          alert('small margherita was not chosen');
        }
      }
      if (i === 1) {
        if (this.pizzaService.order.length === 1) {
          this.isChosenThisPizza = true;
          this.nrSale = i;
          this.choose();
        } else {
          alert('no one pizza selected');
        }
      }
      if (i === 2) {
        if (this.pizzaService.order.length === 2) {
          this.isChosenThisPizza = true;
          this.nrSale = i;
          this.choose();
        } else {
          alert('no two pizzas selected');
        }
      }
    }
  }

  choose() {
    if (this.howManyDiscounts !== 1 && this.isChosenThisPizza === true) {
      alert('added');
      this.howManyDiscounts = 1;
      this.pizzaService.numberSale = this.nrSale;

      this.pizzaService.howMuchLess = (this.pizzaService.total * (this.pizzaService.sale[this.pizzaService.numberSale].discount / 100));
      this.pizzaService.howMuchLess = Math.round(this.pizzaService.howMuchLess * 100) / 100;
      this.pizzaService.total -= this.pizzaService.howMuchLess;
    } else {
      alert('the discount has already been selected');
    }
  }
}
