import { IProduct, IUser } from "@types";

export interface IOrder {
  _id: string;
  products: IProduct[];
  totalPrice: number;
  user: IUser;
  createdAt: string;
}

export interface IOrdersInitialState {
  ordersList: IOrder[];
}

export interface IOrderBody {
  products: {
    productId: string;
    quantity: number;
  }[];
}
