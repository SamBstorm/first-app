import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  private _url : string = "https://restcountries.eu/rest/v2/";

  constructor(private _http : HttpClient) { }

  public getAllCountries() : Observable<any>{
    return this._http.get(this._url+'all/');
  }

  public getOneCountry(code : string) : Observable<any>{
    return this._http.get(this._url+'alpha/'+code);
  }
}
