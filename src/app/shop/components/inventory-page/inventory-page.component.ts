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
    categories: any = [];
    subCategories: any = [];
    products: any = [];
    isContentOpen: any = {};
    cartItems = [];
    items: any = [];
    isChecked: any = {};

    constructor(
        public inventoryService: InventoryService,
        private cartService: CartService) {
    }

    filterProduct(status: any, id: any) {
        this.inventoryService.getFilterInventory(id).subscribe((res: any) => {
            res.map(value => {
                if (status === true) {
                    this.items.push(value);
                } else {
                    this.items.splice(value, 1);
                }
            });
        });
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
        this.inventoryService.getAllCategory().subscribe(categories => {
            this.categories = categories;
        });
        this.inventoryService.getAllSubCategory().subscribe(subCategories => {
            this.subCategories = subCategories;
        });
        this.inventoryService.getAllInventory().subscribe(products => {
            this.products = products;
        });

    }

    ngOnDestroy(): void {
        this.inventoryDestroyed$.next();
        this.inventoryDestroyed$.complete();
    }

}
