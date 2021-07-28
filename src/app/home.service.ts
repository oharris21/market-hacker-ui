import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StockOverview } from './models/StockOverview';
import { StockDetailed } from './models/StockDetailed';
import { HotList } from './models/HotList';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl: string = 'http://localhost:8080'; 

  constructor(private httpClient: HttpClient) { }

  public getSearchStockResults(searchString: string): Observable<StockOverview[]> {
    let params = new HttpParams().set('searchString', searchString); 
    return this.httpClient
      .get<StockOverview[]>(this.baseUrl + '/search', {params: params});
      // .pipe(catchError(this.handleError<StockOverview[]>('getHeroes', [])));
  }

  public getStockBySymbol(symbol: string): Observable<StockDetailed> {
    let params = new HttpParams().set('symbol', symbol); 
    return this.httpClient
      .get<StockDetailed>(this.baseUrl + '/get-quote', {params: params});
      // .pipe(catchError(this.handleError<StockDetailed>('getHeroes')));
  }

  public getStockScreenerResults(params: HttpParams): Observable<StockDetailed[]> {
    return this.httpClient
      .get<StockDetailed[]>(this.baseUrl + '/stock-screener', {params: params});
      // .pipe(catchError(this.handleError<StockOverview[]>('getHeroes', [])));
  }

  public getHotList(): Observable<HotList> {
    return this.httpClient
      .get<HotList>(this.baseUrl + '/hotlist', {});
      // .pipe(catchError(this.handleError<StockOverview[]>('getHeroes', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
