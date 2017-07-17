
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { RequestMethod, CommonServer } from './CommonService';
import _ from 'lodash';
import { Product } from "../models/product";
@Injectable()
export class ProductService extends CommonServer {

  private uri = environment.uri_address + '/products';
  constructor(public http: Http) {
    super(http);
  }
  getProducts() {
    return this.Request(RequestMethod.GET, this.uri, {}).map(items => {
      return _.map(items, item => {
        return new Product(item.id, item.name, item.description, item.price, item.image, item.createAt);
      })

    });
  }

  getProduct(productId) {
    return this.Request(RequestMethod.GET, this.uri + '/' + productId, {}).map(item => {
      return new Product(item.id, item.name, item.description, item.price, item.image, item.createAt);
    });
  }

}
