import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserSetingFormComponent } from './user-seting-form/user-seting-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSetingFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
