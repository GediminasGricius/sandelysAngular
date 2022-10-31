import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Warehouse} from "../models/warehouse";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly url='http://localhost:8000/api/';
  constructor(private http:HttpClient) {

  }

  public getProducts(){
    return this.http.get<Product[]>(this.url+'products');
  }
}
