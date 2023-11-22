export interface IProductsInitialState {
  productsList: IProduct[];
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
}

export interface ICreateProductBody {
  name: string;
  price: number;
}
