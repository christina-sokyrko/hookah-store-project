import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InventoryPageComponent} from './components/inventory-page/inventory-page.component';
import {ItemPageComponent} from './components/item-page/item-page.component';

const routes: Routes = [
  { path: 'inventory', pathMatch: 'full', component: InventoryPageComponent },
  { path: 'item-page', pathMatch: 'full', component: ItemPageComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ShopModule { }
