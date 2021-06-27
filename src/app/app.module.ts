import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {InventoryPageComponent} from './shop/components/inventory-page/inventory-page.component';
import {ItemPageComponent} from './shop/components/item-page/item-page.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderPageComponent} from './shop/components/order-page/order-page.component';

import {AccordionModule} from 'ngx-bootstrap/accordion';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    declarations: [
        AppComponent,
        InventoryPageComponent,
        ItemPageComponent,
        OrderPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        HttpClientModule,
        AccordionModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        CarouselModule,
        FormsModule,
        ModalModule.forRoot(),
        NgxMaskModule.forRoot(),
    ],
    providers: [],
    exports: [
        InventoryPageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}