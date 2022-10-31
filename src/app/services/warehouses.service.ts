import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Warehouse} from "../models/warehouse";

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {
  private readonly url='http://localhost:8000/api/';
  constructor(private http:HttpClient) {

  }

  public getWarehouses(){
    return this.http.get<Warehouse[]>(this.url+'warehouses');
  }
}
