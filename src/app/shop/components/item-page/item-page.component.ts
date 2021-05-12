import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {CartService} from '../../../services/cart.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {NgForm} from '@angular/forms';


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
    
    onSubmit(f: NgForm) {
        console.log(f.value);  
        console.log(f.valid); 
      }
  

    constructor(
        private inventoryService: InventoryService,
        private cartService: CartService,
        private route: ActivatedRoute,
       
    ) {
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