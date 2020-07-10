import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSetingFormComponent } from './user-seting-form/user-seting-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UserSetingFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
