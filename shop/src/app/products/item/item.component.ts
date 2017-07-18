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
  @Output()
  public OnSelectProduct = new EventEmitter();
  @Output()
  public OnDeleteProduct = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onProductSelectClick(selectedProduct) {
    this.OnSelectProduct.emit(selectedProduct);
  }
  onProductDeleteClick(selectedProduct) {
    this.OnDeleteProduct.emit(selectedProduct);
  }
}
