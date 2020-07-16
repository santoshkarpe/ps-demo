import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserSetingFormComponent } from './user-seting-form/user-seting-form.component';
import { DataService } from './data/data.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    UserSetingFormComponent
  
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
