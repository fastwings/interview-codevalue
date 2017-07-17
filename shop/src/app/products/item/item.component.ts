import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/product";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
