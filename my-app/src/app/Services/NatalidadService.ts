import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NatalidadService {

    constructor(private http: HttpClient){}

    getNatalidad(){
        return this.http.get('/api/natalidad');
    }

}