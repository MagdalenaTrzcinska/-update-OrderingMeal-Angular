import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPhotoChange]'
})
export class PhotoChangeDirective {
  numer2 = 2;
  photo: { sale: string; main: string; details: string };

  photo1 = {
    main: 'FREE DELIVERY',
    details: 'do not wait',
    sale: ''
  };

  photo2 = {
    main: 'ONLY TODAY',
    details: '% for two pizzas',
    sale: '35%'
  };

  photo3 = {
    main: 'SMALL MARGHERITA',
    details: 'only 2,4 € ',
    sale: ''
  };

  constructor(private el: ElementRef) {
    setInterval(() => {

      this.numer2++;
      if (this.numer2 === 1){
        this.photo = this.photo1;
      } else if (this.numer2 === 2){
        this.photo = this.photo2;
      } else{
        this.photo = this.photo3;
      }

      if (this.numer2 > 3) {
        this.numer2 = 1;
        this.photo = this.photo1;
      }

      this.el.nativeElement.innerHTML = '<img style="width: 100%; height: 50%; filter: brightness(0.3); position: relative" src="../assets/pizza' + this.numer2 + '.png"/>' +
        '<h1 style="left: 50%; font-size:200%; transform: translateX(-50%); position: absolute; top:5%; color: #73a2ff; font-family: Athelas; font-weight: bold">' + this.photo.main + '</h1>' +
        // tslint:disable-next-line:max-line-length
        '<h3 style="left: 50%; transform: translateX(-50%); position: absolute; top:27%; color: #dedede;">' + this.photo.details + '</h3>' +
        '<h2 style="left: 50%; transform: translateX(-50%); position: absolute; top:35%; color: #73a2ff;">' + this.photo.sale + '</h2>' ;
    }, 3000);
  }

}
