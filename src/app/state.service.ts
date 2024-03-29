import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {State} from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  uri ='http://localhost:4000';
 stateid: number;
  states:State[];
  constructor(private http: HttpClient) {
    
   }
   
   getCountries(){
    return this.http.get(`${this.uri}/countries`);
  }
  
  getState(){
    return this.http.get(`${this.uri}/states`);
  }
  

  addState(stateid,statename){
    const state = {
      stateid: stateid,
      statename: statename
    };
    return this.http.post(`${this.uri}/states/add`,state);
   }

    
}
