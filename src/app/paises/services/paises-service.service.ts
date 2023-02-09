import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(){
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPasisesPorRegion(region: string): Observable<PaisSmall[]>{

    return this.http.get<PaisSmall[]>(`${ this.baseUrl }/region/${ region }?fields=alpha3Code,name`)
  }

}
