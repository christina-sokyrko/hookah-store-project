import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  
})
export class ItemPageComponent implements OnInit {
  itemsPerSlide = 5;
  singleSlideOffset = true;
 
  slides = [
    {image: 'assets/images/item-page/hookah-1.png'},
    {image: 'assets/images/item-page/hookah-2.png'},
    {image: 'assets/images/item-page/hookah-3.png'},
    {image: 'assets/images/item-page/hookah-1.png'},
    {image: 'assets/images/item-page/hookah-2.png'},
    {image: 'assets/images/item-page/hookah-3.png'}
    ];

  
  constructor() { }

  ngOnInit(): void {
  }
 

};




