import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products =[ 
    {id:101, name:'Laptop', price:100},
    {id:102, name:'Mobile', price:200},
    {id:103, name:'Tablet', price:300},
    {id:104, name:'Monitor', price:400},
    {id:105, name:'Keyboard', price:500}
  ]

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter(p => p.id == id);
  }

  addProduct(product: any) {
    this.products = [...this.products, product];
  }
  
}
