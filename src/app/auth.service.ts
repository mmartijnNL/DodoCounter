import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
export class AuthService {
     
    constructor(private http: HttpClient) {    }

    private extractData(res: Response) {
      let body = res;
      return body || { };
    }
  
    //could not get this to work. the backend gets the push call but there is no authorization header
  authenticate(userName:string, passWord:string): Observable<any> {
    console.log(userName);

    //todo use params
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", "Basic " + btoa(userName+":"+passWord));
    
    const httpOptions = {
      headers: headers
      // new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   'Authorization': "Basic " + btoa(userName+":"+passWord)
      // })
    };

    return this.http.post<any>(endpoint + 'authentication',"",httpOptions)
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    }));
  }
}
