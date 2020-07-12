export interface Pizza {
  name: string;
  ingredients: string;
  small_Price: number;
  medium_Price: number;
  huge_Price: number;
}


export interface Order {
  name: string;
  ingredients: string;
  other_Ingredients: string;
  size: string;
  price: number;
}

export interface Sale {
  name: string;
  info: string;
  discount: number;
}
