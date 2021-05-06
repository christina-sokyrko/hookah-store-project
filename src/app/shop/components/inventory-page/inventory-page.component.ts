import {Component, OnInit, OnDestroy} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {Subject} from 'rxjs';
import {CartService} from '../../../services/cart.service';

@Component({
    selector: 'app-inventory-page',
    templateUrl: './inventory-page.component.html',
    styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit, OnDestroy {
    public inventoryDestroyed$: Subject<void> = new Subject<void>();
    tobaccos;
    hookahs;
    charcoals;
    accessories;
    items;
    isContentOpen: any = {};
    cartItems = [];
    massiv = [];
    isChecked: any = {};

    constructor(
        public inventoryService: InventoryService,
        private cartService: CartService) {
    }

    public categories = [
        {id: 0, name: 'Табак', value: this.tobaccos},
        {id: 1, name: 'Кальяни', value: this.hookahs},
        {id: 2, name: 'Вугілля', value: this.charcoals},
        {id: 3, name: 'Аксесуари', value: this.accessories},
    ];

    checkValue(event: any, value, id) {
        if (event) {
            this.massiv.push(value);
        } else {
            delete this.massiv[id];
        }
        console.log(this.massiv);
    }

    addToCart(item) {
        if (!this.cartService.itemInCart(item)) {
            item.qtyTotal = 1;
            this.cartService.addToCart(item);
            this.cartItems = [...this.cartService.getItems()];
        }
    }

    toggleAccordion(status: any, idAccordion) {
        this.isContentOpen[idAccordion] = status;
    }

    ngOnInit(): void {
        this.inventoryService.getAllTobaccos().subscribe(tobaccos => {
            this.tobaccos = tobaccos;
        });
        this.inventoryService.getAllCharcoals().subscribe(charcoals => {
            this.charcoals = charcoals;
        });
        this.inventoryService.getAllHookahs().subscribe(hookahs => {
            this.hookahs = hookahs;
        });
        this.inventoryService.getAllAccessories().subscribe(accessories => {
            this.accessories = accessories;
        });
    }

    ngOnDestroy(): void {
        this.inventoryDestroyed$.next();
        this.inventoryDestroyed$.complete();
    }

}
