import {Component, OnInit} from '@angular/core';
import {Sale} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit{
  sales: Sale[];

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.subjectSale.subscribe(sale => {
      this.sales = sale;
    });
  }

  onPickedPromotion(numberSale: number) {
    this.pizzaService.pickedPromotion(numberSale);
  }
}
