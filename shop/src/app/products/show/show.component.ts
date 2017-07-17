import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/product";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @Input()
  public product: Product;
  constructor() { }

  ngOnInit() {
  }

}
