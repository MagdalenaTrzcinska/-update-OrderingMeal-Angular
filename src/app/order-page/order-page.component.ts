import {Component, OnChanges, OnInit} from '@angular/core';
import {PizzaService} from '../pizza.service';
import {Order, Sale} from '../pizza';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit{
  order: Order[] = [];
  sale: Sale[] = [];
  totalPrice: number;
  selectedSaleIndex: number;
  discount: number;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.subjectSale.subscribe(sale => {
      this.sale = sale;
    });

    this.order = this.pizzaService.order;
    this.totalPrice = this.pizzaService.totalPrice;
    this.selectedSaleIndex = this.pizzaService.selectedSaleIndex;
    this.discount = this.pizzaService.discount;
  }
}
