import { Injectable } from '@angular/core';

@Injectable(
)
export class CategoryService {

  categories = [
    {id:"C1", name:'Electronics'},
    {id:'C2', name:'Clothing'},
  ]

  getCategories() {
    return this.categories;
  }

}
