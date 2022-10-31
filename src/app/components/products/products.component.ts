import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[]=[];
  public price:number=5;
  constructor(private productService:ProductsService) {
    this.productService.getProducts().subscribe((respose)=>{

      respose.forEach((product)=>{
        if (product.price>this.price){
          this.products.push(product);
        }

      })

    })
  }

  ngOnInit(): void {
  }

}
