import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Product } from "../models/product";
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, ParamMap } from "@angular/router/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  private selectedId: number;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        if (params.get('id')) {
          this.selectedId = +params.get('id');
        }
        return this.service.getProducts();
      });
  }

}
