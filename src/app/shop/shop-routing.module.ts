import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InventoryPageComponent} from './components/inventory-page/inventory-page.component';
import {ItemPageComponent} from './components/item-page/item-page.component';
import {OrderPageComponent} from './components/order-page/order-page.component';
import {ShopComponent} from './shop.component';

const routes: Routes = [
    {
        path: '', component: ShopComponent,
        children: [
            {
                path: '', component: InventoryPageComponent, pathMatch: 'full',
            },
            {
                path: 'item-page', component: ItemPageComponent, pathMatch: 'full'
            },
            {
                path: 'order', component: OrderPageComponent, pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {
}
