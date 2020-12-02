import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  private getDataProduct(response){
    console.log(response)
    return response.data

  }

  private getDataProductId(response) {
    return response.data
  }

  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.urlAddress + 'product').pipe(map(this.getDataProduct))
  }

  public getProductId(_id:string): Observable<Product[]>{
    return this.http.get<Product[]>(environment.urlAddress + 'product/' +_id).pipe(map(this.getDataProductId))
  }

}
