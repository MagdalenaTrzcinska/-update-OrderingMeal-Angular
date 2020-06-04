import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSelectedPizza]'
})
export class SelectedPizzaDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'grey';
  }

}
