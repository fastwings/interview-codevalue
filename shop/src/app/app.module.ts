import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './products/item/item.component';
import { ProductComponent } from './products/product.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MdCardModule, MdButtonModule, MdCheckboxModule, MdListModule, MdGridListModule } from '@angular/material';
@NgModule({
  declarations: [
    ItemComponent,
    ProductComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdCheckboxModule,
    MdListModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
