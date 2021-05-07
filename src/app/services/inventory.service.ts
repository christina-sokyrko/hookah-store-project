import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class InventoryService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getAllCategory() {
        return this.http.get(environment.apiBaseUrl + '/categories');
    }

    getAllSubCategory() {
        return this.http.get(environment.apiBaseUrl + '/sub-categories');
    }

    getAllInventory() {
        return this.http.get(environment.apiBaseUrl + '/products?_limit=300');
    }

    getFilterInventory(id: number) {
        return this.http.get(environment.apiBaseUrl + `/products?category=${id}`);
    }
}


