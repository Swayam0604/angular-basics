import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  providers: [CategoryService]
})
export class ServiceComponent {
  products : any[]= [];
  categories : any[]= [];
  categoryService= inject(CategoryService);
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  getProductById(id: number) {
    this.products = this.productService.getProductById(id);
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  getCategories() {
    this.categories = this.categoryService.getCategories();
  }


}
