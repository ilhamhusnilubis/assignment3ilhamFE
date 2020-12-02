import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import { CartItem } from '../models/cart-item';
// import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { truncateSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  header = new HttpHeaders().append('Content-Type',"application/json;charset=utf-8").append('access_token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE2YjMzYjY3ZWMwYjA4NDg2OGQ1MTIiLCJpYXQiOjE2MDQ4NDM4Njd9.ux_GP5YjIRzZs3dpcGsw7xSGwKdnlErDCkwtDMVxOu4")
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${environment.urlAddress}/products`).pipe(
      map((result: any[])=> {
        let cartItems: CartItem[] = [];
        for (let item of result){
          let productExists = false

        for (let i in cartItems) {
          if (cartItems[i]._id === item.product._id){  
              cartItems[i].qty++
              productExists = true
              break;
              }
        }

        if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          } 
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.put(environment.urlAddress+'cart/5fa817259bcc2b268c06701a',  {
      productId:"5fa817259bcc2b268c06701a",
      quantityproduct:1
    },{
      headers:this.header
    } );
  }
  // addProductToCart(_id:String, idUser:String) {
  //   return this.http.post(`${environment.urlAddress}cart/${idUser}`, {
  //     productId:_id
  //   });
  // }
}

