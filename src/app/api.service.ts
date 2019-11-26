import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'KEY';
  constructor(private httpClient: HttpClient) { }

  public getCats(){
    return this.httpClient.get(`https://api.thecatapi.com/v1/breeds?&x-api-key=${this.API_KEY}`);
  }
}
