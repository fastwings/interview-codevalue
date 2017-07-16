import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './products/list/list.component';
import { ItemComponent } from './products/item/item.component';
import { ProductComponent } from './products/product.component';
import { PageNotFoundComponent } from './page-not-found.component';
@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    ProductComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
