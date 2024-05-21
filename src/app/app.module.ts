import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ElementsModule } from './elements/elements.module'; //lazy loading
//import { CollectionsModule } from './collections/collections.module'; //lazy loading
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    //ElementsModule, //lazy loading
    //CollectionsModule, //lazy loading
    AppRoutingModule  //spostarlo all'ultimo posto per mantenere le regole di routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
