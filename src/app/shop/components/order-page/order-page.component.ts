import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CurrencyPipe} from '@angular/common';

@Component({
    selector: 'app-order-page',
    templateUrl: './order-page.component.html',
    styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
    @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
    @ViewChildren('subTotalWrapExisting') subTotalItemsExisting: QueryList<ElementRef>;
    items = [];

    constructor(
        private cartService: CartService,
        private currencyPipe: CurrencyPipe
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
        const subTotal = amt * qty;
        this.subTotalItems.toArray()[index].nativeElement.innerHTML = this.currencyPipe.transform(subTotal);
        this.cartService.saveCart();
    }

    removeFromCart(item) {
        this.cartService.removeItem(item);
        this.items = this.cartService.getItems();
    }

    clearCart(items) {
        // this.items.forEach((item, index) => this.cartService.removeItem(index));
        this.cartService.clearCart(items);
        this.items = [...this.cartService.getItems()];
    }

    ngOnInit(): void {
        this.cartService.loadCart();
        this.items = this.cartService.getItems();
    }

}
