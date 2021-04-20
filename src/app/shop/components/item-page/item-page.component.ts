import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class ItemPageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
 

};




