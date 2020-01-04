import {Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({

    providedIn : 'root'
})


export class ApiService {

    constructor(private httpClient: HttpClient) { }

    public getData(){

        
        // return this.httpClient.get(`http://jsonplaceholder.typicode.com/users`);
        return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`);

      }
  }
  