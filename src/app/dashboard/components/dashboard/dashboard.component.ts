import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    items: 1,
    navSpeed: 700,
    nav: false
  };

  slidesData = [
    {
      bg: 'assets/images/slide-1-hookah.png',
      type: 'Табак',
      name: 'Dead Horse',
      description: 'Смеси Dead Horse отличаются высоким уровнем крепости. Табак для кальяна Mint Mafia от бренда Dead Horse ' +
        'напоминает на вкус чистую мяту. Отлично курится в соло, при желании можно разбавить.',
    },
    {
      bg: 'assets/images/slide-2-hookah.png',
      type: 'Табак',
      name: 'DarkSide',
      description: 'Манговый ласси у Darkside – это мягкий, ароматный и сладкий вкус манго с небольшой кислинкой. ' +
        'Аромат манго очень естественный, советуем попробовать!',
    },
    {
      bg: 'assets/images/slide-1-hookah.png',
      type: 'Табак',
      name: 'Dead Horse',
      description: 'Смеси Dead Horse отличаются высоким уровнем крепости. Табак для кальяна Mint Mafia от бренда Dead Horse ' +
        'напоминает на вкус чистую мяту. Отлично курится в соло, при желании можно разбавить.',
    },
  ];

  instagramImgs= [
    'assets/images/insta-img-1.png',
    'assets/images/insta-img-2.png',
    'assets/images/insta-img-3.png',
    'assets/images/insta-img-4.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
