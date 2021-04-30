import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./item-page.component.scss'],

})
export class ItemPageComponent implements OnInit {
    
   // public selectControl = new FormControl();

  //  public selectItems = [
  //      {optionId: 1, optionTitle: 'option 1'},
   //     {optionId: 2, optionTitle: 'option 2'},
   //     {optionId: 3, optionTitle: 'option 3'},
   //     {optionId: 4, optionTitle: 'option 4'},
   //     {optionId: 5, optionTitle: 'option 5'},
   //     ];


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
    
    
   

}




