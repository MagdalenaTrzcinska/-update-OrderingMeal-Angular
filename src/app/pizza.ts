export interface Pizza {
  name: string;
  ingredients: string;
  smallPrize: number;
  mediumPrize: number;
  hugePrize: number;
}


export interface Order {
  name: string;
  ingredients: string;
  otheringredients: string;
  size: string;
  prize: number;
}

export interface Sale {
  name: string;
  info: string;
  discount: number;
}
