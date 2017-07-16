
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { RequestMethod, CommonServer } from './CommonService';
@Injectable()
export class ProductService extends CommonServer {

  private uri = environment.uri_address + '/products';
  constructor(public http: Http) {
    super(http);
  }
  getProducts() {
    return this.Request(RequestMethod.GET, this.uri, {});
  }

  getProduct(productId) {
    return this.Request(RequestMethod.GET, this.uri + '/' + productId, {});
  }

}
