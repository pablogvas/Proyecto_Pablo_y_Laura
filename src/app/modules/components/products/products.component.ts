import { Component } from '@angular/core';

import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = []
  filterBy: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

}
