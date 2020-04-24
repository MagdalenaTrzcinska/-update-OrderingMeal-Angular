import {Component, OnChanges, OnInit} from '@angular/core';
import {PizzaService} from "../pizza.service";
import {Order, Sale} from "../pizza";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, OnChanges {

  order: Order[] = [];
  sale: Sale[] = [];
  total: number;
  numberSale = 3;

  howMuchLess: number;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.order = this.pizzaService.order;
    this.sale = this.pizzaService.sale;
    this.total = this.pizzaService.total;
    this.numberSale = this.pizzaService.numberSale;
    this.howMuchLess = this.pizzaService.howMuchLess;

  }

  ngOnChanges(): void {
    this.order = this.pizzaService.order;
    this.total = this.pizzaService.total;
  }


}
