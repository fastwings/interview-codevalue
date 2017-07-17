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

  private selectedId: number;
  private sub;
  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateProducts();
    this.sub = this.route.queryParams.subscribe(params => {
      // (+) before `params.get()` turns the string into a number
      if (params['id']) {
        this.selectedId = +params['id'];
      }
    });
  }
  updateProducts() {
    this.products = [];
    this.service.getProducts().subscribe(data => {
      this.products = data;
    });

  }

}
