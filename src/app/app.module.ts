import { AppRotas } from './app.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
