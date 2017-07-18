
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Product } from "../models/product";
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Array<Product>;

  private selectedProduct: Product;
  private productId;
  private sub;
  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateProducts();
    this.sub = this.route.params.subscribe(params => {
      // (+) before `params.get()` turns the string into a number
      if (params['id'] && +params['id'] != 0) {
        this.productId = +params['id'];
        this.service.getProduct(this.productId).subscribe(data => {
          this.selectedProduct = data;
        })
      }
    });
  }
  onSelectedProduct(selectProduct) {
    this.selectedProduct = selectProduct;
  }

  onDeleteProduct(product) {
    this.service.deleteProduct(product.Id).subscribe(data => {
      console.log(data);

      this.updateProducts();
      if (product.Id == this.productId) {
        this.productId = null;
        this.selectedProduct = null;
      }
    })
  }
  onUpdate() {
    this.updateProducts();
    if (this.selectedProduct) {
      this.service.getProduct(this.productId).subscribe(data => {
        this.selectedProduct = data;
      })
    }
  }

  updateProducts() {
    this.products = [];
    this.service.getProducts().subscribe(data => {
      this.products = data;
    });

  }

}
