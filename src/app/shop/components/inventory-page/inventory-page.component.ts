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
    Tobaccos: any[];
    Hookahs: any[];
    Charcoals: any[];
    Accessories: any[];
    Items: any[];

    constructor(
        public Is: InventoryService
    ) {
    }

    changeData(val): void {
        this.Items = val;
    }

    ngOnInit(): void {
        this.Is.getAllTobaccos().subscribe(tobaccos => {
            this.Tobaccos = tobaccos;
        });
        this.Is.getAllCharcoals().subscribe(charcoals => {
            this.Charcoals = charcoals;
        });
        this.Is.getAllHookahs().subscribe(hookahs => {
            this.Hookahs = hookahs;
        });
        this.Is.getAllAccessories().subscribe(accessories => {
            this.Accessories = accessories;
        });
    }

    ngOnDestroy(): void {
        this.inventoryDestroyed$.next();
        this.inventoryDestroyed$.complete();
    }

}
