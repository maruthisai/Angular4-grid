import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';

import { AdventureTimeService } from './services/adventure-time.service';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AdventureTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
