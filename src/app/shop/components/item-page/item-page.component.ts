import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.scss'],

})
export class ItemPageComponent implements OnInit {
    
    public selectItems = [
        {value: 1, title: 'x1'},
        {value: 2, title: 'x2'},
        {value: 3, title: 'x3'},
        {value: 4, title: 'x4'},
        {value: 5, title: 'x5'},
    
    ];
    selectItem(event: any) {
        console.log(event);
    }



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

    ngOnInit(): void {
       

    }
    
} 
   






