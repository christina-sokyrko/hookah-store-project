import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {CartService} from '../../../services/cart.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.scss'],

})
export class ItemPageComponent implements OnInit {
    id: number;
    product: any = {};
    cartItems = [];
    count = 1;
    number: number;
    amountForm: FormGroup;


    constructor(
        private inventoryService: InventoryService,
        private cartService: CartService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {
        this.amountForm = formBuilder.group({
            amount: new FormControl('1', {
                validators: Validators.max(this.product.amount),
            })
        });
    }

    activeSlide = 0;

    slides = [
        {image: 'assets/images/item-page/hookah-1.png'},
        {image: 'assets/images/item-page/hookah-2.png'},
        {image: 'assets/images/item-page/hookah-3.png'},
        {image: 'assets/images/item-page/hookah-1.png'},
        {image: 'assets/images/item-page/hookah-2.png'},
        {image: 'assets/images/item-page/hookah-3.png'}
    ];


    addToCart(item) {
        if (!this.cartService.itemInCart(item)) {
            item.qtyTotal = this.amountForm.get('amount').value || this.count;
            this.cartService.addToCart(item);
            this.cartItems = [...this.cartService.getItems()];
        }
    }

    switchSlide(i) {
        this.activeSlide = i;
    }

    onSlide(event) {
        const element = document.querySelectorAll<HTMLElement>('.indicators .indicator')[this.activeSlide];
        const parent = element.parentNode as HTMLElement;
        let scrollLeft = parent.scrollLeft;
        if (parent.scrollLeft > element.offsetLeft) {
            scrollLeft = element.offsetLeft - 20; }
        if (parent.scrollLeft + parent.offsetWidth < element.offsetLeft + element.offsetWidth) {
            scrollLeft = element.offsetLeft + element.offsetWidth - parent.offsetWidth + 20; }
        parent.scrollLeft = scrollLeft;
    }

    onChange() {
        const a: number = Number(this.amountForm.get('amount').value);
        if (a > Number(this.product.amount)) {
            this.amountForm.controls.amount.setValue(this.product.amount);
        }
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.inventoryService.getByIdTobaccos(this.id)
            .pipe(first())
            .subscribe(product => {
                this.product = product;
            });
    }

    increase() {
        this.count++;
    }

    decrease() {
        this.count--;
    }

}
