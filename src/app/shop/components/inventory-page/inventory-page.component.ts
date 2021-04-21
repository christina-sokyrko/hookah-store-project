import {Component, OnInit, OnDestroy} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-inventory-page',
    templateUrl: './inventory-page.component.html',
    styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit, OnDestroy {
    public inventoryDestroyed$: Subject<void> = new Subject<void>();
    tobaccos;
    hookahs;
    charcoals;
    accessories;
    items;
    isContentOpen = false;

    constructor(
        public inventoryService: InventoryService) {
    }

    toggleAccordion(event: any) {
        console.log(event);
        this.isContentOpen = event;
    }

    changeData(val): void {
        this.items = val;
    }

    ngOnInit(): void {
        this.inventoryService.getAllTobaccos().subscribe(tobaccos => {
            this.tobaccos = tobaccos;
        });
        this.inventoryService.getAllCharcoals().subscribe(charcoals => {
            this.charcoals = charcoals;
        });
        this.inventoryService.getAllHookahs().subscribe(hookahs => {
            this.hookahs = hookahs;
        });
        this.inventoryService.getAllAccessories().subscribe(accessories => {
            this.accessories = accessories;
        });
    }

    ngOnDestroy(): void {
        this.inventoryDestroyed$.next();
        this.inventoryDestroyed$.complete();
    }

}
