import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';

import { Userrequest} from '../models/RequestEntities';
import { IssucceedInfomation } from '../models/ResponseEntities';
import { environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor(
private router: Router,
private http: HttpClient
  ) { }
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
apiurl: string = environment.API_URL;



// Challenge():Observer<T> {
// const url = `${this.apiurl}/api/login`;
// this.http.post<>().pipe(catchError());
// return T;
// }




// Check localstoragetoken
getAuthorizationToken(): string {
const token = localStorage.getItem('token');
const bearer = `Bearer ${token}` ;
return bearer;
}
// is admin
isadmin(): Observable<boolean> {
const token = window.localStorage.getItem('token');
if (token !== null) {
// console.log('token is not null');
return of(true);
} else if (token === null) {
// console.log("token is null");
this.router.navigate(['/admin/login']);
window.localStorage.clear();
// window.location.reload();
return of(false);
}
}

// Challenge
Challenge(userrequest: Userrequest): Observable<IssucceedInfomation> {
const url = `${this.apiurl}/api/login`;
return this.http.post<IssucceedInfomation>(url, userrequest, this.httpOptions)
.pipe(catchError(this.handdleError<IssucceedInfomation>('challenge')));
}

// redirect to error
private handdleError<T>( operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
return of (result as T );
}
}
// Error

}
