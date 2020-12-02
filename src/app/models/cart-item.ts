import { ObjectId } from 'mongodb';
import { Product } from './product';

export class CartItem {
    _id: ObjectId;
    productId: ObjectId;
    productName: string;
    qty: number;
    price: number;

    constructor(_id: ObjectId, product: Product, qty=1){
        this._id = _id;
        this.productId = product._id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty;
    }
}
