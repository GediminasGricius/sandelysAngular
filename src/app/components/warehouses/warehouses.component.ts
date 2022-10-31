import { Component, OnInit } from '@angular/core';
import {WarehousesService} from "../../services/warehouses.service";
import {Warehouse} from "../../models/warehouse";

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {

  public warehouses:Warehouse[]=[];
  constructor(private warehouseService:WarehousesService) {
    this.warehouseService.getWarehouses().subscribe(
      (response)=>{
        this.warehouses=response;
      }
    );
  }

  ngOnInit(): void {
  }

}
