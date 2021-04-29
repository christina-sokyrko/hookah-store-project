import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.scss'],

})
export class ItemPageComponent implements OnInit {

    constructor() {
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

    switchSlide(i) {
        this.activeSlide = i;
    }

    ngOnInit(): {

    }
    
    
    saveQuantity(qForm: NgForm): void {
        console.log(qForm.value);
    }

}




