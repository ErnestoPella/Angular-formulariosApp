import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

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

  getPasisesPorCodigo(codigo: string): Observable<Pais | null>{

    if (!codigo) {
      return of(null)
    }
    
    return this.http.get<Pais>(`${ this.baseUrl }/alpha/${ codigo }`)
  }

  getPasisPorCodigoSmall(codigo: string): Observable<PaisSmall>{
    
    return this.http.get<PaisSmall>(`${ this.baseUrl }/alpha/${ codigo }?fields=name,alpha3Code`)
  }

  getPaisesPorCod(borders: string[]): Observable<PaisSmall[]>{
    if ( !borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] =[];

    borders.forEach( codigo => {
      const peticion = this.getPasisPorCodigoSmall(codigo);
      peticiones.push( peticion);
    })
    return combineLatest( peticiones );
  }
}
