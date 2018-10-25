import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:54228/api/';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getEntries(): Observable<any> {
    
    return this.http.get(endpoint + 'entries').pipe(
      map(this.extractData));
  }
  
  getEntry(id): Observable<any> {
    return this.http.get(endpoint + 'entries/' + id).pipe(
      map(this.extractData));
  }
  
  addEntry (entry): Observable<any> {
    console.log(entry);
    return this.http.post<any>(endpoint + 'entries', JSON.stringify(entry), httpOptions).pipe(
      tap((entry) => console.log(`added entry w/ id=${entry.id}`)),
      catchError(this.handleError<any>('addEntry'))
    );
  }
  
  
  updateEntry (id, entry): Observable<any> {
    return this.http.put(endpoint + 'entries/' + id, JSON.stringify(entry), httpOptions).pipe(
      tap(_ => console.log(`updated entry id=${id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }
  
  deleteEntry (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'entries/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted entry id=${id}`)),
      catchError(this.handleError<any>('deleteEntry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
