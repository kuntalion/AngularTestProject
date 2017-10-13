import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, DataTablesModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
