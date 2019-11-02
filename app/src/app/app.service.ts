import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        console.info("calling user api");
        return this.http.get<User[]>("http://localhost:3000");
    }
}