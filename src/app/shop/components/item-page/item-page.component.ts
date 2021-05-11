import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {CartService} from '../../../services/cart.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.scss'],

})
export class ItemPageComponent implements OnInit {
    id: number;
    tobacco: any = {};
    cartItems = [];
    quantity: any;

    constructor(
        private inventoryService: InventoryService,
        private cartService: CartService,
        private route: ActivatedRoute,
    ) {
    }

    public selectItems = [
        {value: 1, title: 'x1'},
        {value: 2, title: 'x2'},
        {value: 3, title: 'x3'},
        {value: 4, title: 'x4'},
        {value: 5, title: 'x5'},
    ];

    activeSlide = 0;

    slides = [
        {image: 'assets/images/item-page/hookah-1.png'},
        {image: 'assets/images/item-page/hookah-2.png'},
        {image: 'assets/images/item-page/hookah-3.png'},
        {image: 'assets/images/item-page/hookah-1.png'},
        {image: 'assets/images/item-page/hookah-2.png'},
        {image: 'assets/images/item-page/hookah-3.png'}
    ];

    selectItem(value: any) {
        this.quantity = value;
    }

    addToCart(item) {
        if (!this.cartService.itemInCart(item)) {
            item.qtyTotal = this.quantity;
            this.cartService.addToCart(item);
            this.cartItems = [...this.cartService.getItems()];
        }
    }

    switchSlide(i) {
        this.activeSlide = i;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.inventoryService.getByIdTobaccos(this.id)
            .pipe(first())
            .subscribe(tobacco => {
                this.tobacco = tobacco;
            });
    }

}







