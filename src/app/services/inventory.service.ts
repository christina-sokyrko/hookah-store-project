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

    getAllTobaccos() {
        return this.http.get(environment.apiBaseUrl + '/tobaccos');
    }

    getByIdTobaccos(id: number) {
        return this.http.get(environment.apiBaseUrl + `/tobaccos/${id}`);
    }

    getAllHookahs() {
        return this.http.get(environment.apiBaseUrl + '/hookahs');
    }

    getAllCharcoals() {
        return this.http.get(environment.apiBaseUrl + '/charcoals');
    }

    getAllAccessories() {
        return this.http.get(environment.apiBaseUrl + '/accessories');
    }
}


