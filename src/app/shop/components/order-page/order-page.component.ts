import {Component, ElementRef, OnInit} from '@angular/core';
import {QueryList, ViewChildren} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
    selector: 'app-order-page',
    templateUrl: './order-page.component.html',
    styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
    @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
    items = [];

    constructor(
        private cartService: CartService,
    ) {
    }

    get total() {
        return this.items.reduce(
            (sum, x) => ({
                qtyTotal: 1,
                price: sum.price + x.qtyTotal * x.price
            }),
            {qtyTotal: 1, price: 0}
        ).price;
    }

    changeSubtotal(item, index) {
        const qty = item.qtyTotal;
        const amt = item.price;
        this.subTotalItems.toArray()[index].nativeElement.innerHTML = amt * qty + ' ₴';
        this.cartService.saveCart();
    }

    removeFromCart(item) {
        this.cartService.removeItem(item);
        this.items = this.cartService.getItems();
    }

    clearCart() {
        this.cartService.clearCart();
        this.items = [...this.cartService.getItems()];
    }

    ngOnInit(): void {
        this.cartService.loadCart();
        this.items = this.cartService.getItems();
    }

    increase(item, index) {
        item.qtyTotal++;
        this.changeSubtotal(item, index);
    }

    decrease(item, index) {
        item.qtyTotal--;
        this.changeSubtotal(item, index);
    }

}