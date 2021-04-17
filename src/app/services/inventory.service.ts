import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class InventoryService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getAllTobaccos() {
        return this.http.get(environment.apiBaseUrl + '/tobaccos').pipe(map((res: any) => {
            return res;
        }));
    }
    getAllHookahs() {
        return this.http.get(environment.apiBaseUrl + '/hookahs').pipe(map((res: any) => {
            return res;
        }));
    }
    getAllCharcoals() {
        return this.http.get(environment.apiBaseUrl + '/charcoals').pipe(map((res: any) => {
            return res;
        }));
    }

    getAllAccessories() {
        return this.http.get(environment.apiBaseUrl + '/accessories').pipe(map((res: any) => {
            return res;
        }));
    }
}


