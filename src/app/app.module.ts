import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from 'angular/router';
import { InventoryPageComponent } from './src/app/shop/components/inventory-page/inventory-page.component';
import { ItemPageComponent } from './src/app/shop/components/item-page/item-page.component';

const appRoutes = [

  {path: 'store', component: InventoryPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InventoryPageComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
