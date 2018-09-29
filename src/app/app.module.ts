import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { COMPONENTS } from './component/index';
import { FrontLayoutComponent } from './front-layout/front-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    FrontLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
