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
    Tobaccos;
    Hookahs;
    Charcoals;
    Accessories;
    Items;

    constructor(
        public inventoryService: InventoryService
    ) {
    }

    changeData(val): void {
        this.Items = val;
    }

    ngOnInit(): void {
        this.inventoryService.getAllTobaccos().subscribe(tobaccos => {
            this.Tobaccos = tobaccos;
        });
        this.inventoryService.getAllCharcoals().subscribe(charcoals => {
            this.Charcoals = charcoals;
        });
        this.inventoryService.getAllHookahs().subscribe(hookahs => {
            this.Hookahs = hookahs;
        });
        this.inventoryService.getAllAccessories().subscribe(accessories => {
            this.Accessories = accessories;
        });
    }

    ngOnDestroy(): void {
        this.inventoryDestroyed$.next();
        this.inventoryDestroyed$.complete();
    }

}
