import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

// request & response
import { IssucceedInfomation, Customerlist } from '../models/ResponseEntities';
import { CustomerPayload, CustomerEditPayload } from '../models/RequestEntities';

import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

constructor(
private http: HttpClient,
) {
}
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
apiurl: string = environment.API_URL;
 customerpayload: CustomerPayload;

// Createcustomer

Createcustomer(customerpayload: CustomerPayload): Observable<IssucceedInfomation> {
const url = `${this.apiurl}/api/customer`;
console.log(url);
return  this.http.post<IssucceedInfomation>(url, customerpayload, this.httpOptions).
pipe(catchError(this.handdleError<IssucceedInfomation>('Createcustomer')));
}

// edit customer

Editcustomer(customereditpayload: CustomerEditPayload): Observable<IssucceedInfomation> {
const url = `${this.apiurl}/api/customer`;
return this.http.put<IssucceedInfomation>(url, customereditpayload, this.httpOptions).pipe
(catchError(this.handdleError<IssucceedInfomation>('Editcustomer')));
}

// find customer by phonenumber

Findcustomer(term: string): Observable<Customerlist[]> {
const url = `${this.apiurl}/api/customer/find/${term}`;
return this.http.get<Customerlist[]>(url, this.httpOptions).pipe(catchError(this.handdleError('Findcustomer', [])));
}

// customerdetail by id,  short infomation
Getcustomerdetailshort(id: string): Observable<Customerlist> {
const url = `${this.apiurl}/api/customer/shortdetail/${id}`;
return this.http.get<Customerlist>(url , this.httpOptions).
pipe(catchError(this.handdleError<Customerlist>('Getcustomerdetailshort')));
}


// customerdetail by id , Long infomation
// const url = `${this.apiurl}/api/customer/longdetail/${id}`;
// GetcustomerdetailLong(): Observable<Customerdetaillong> {
//  return this.http.get<Customerdetaillong>().pipe(catchError(this.handdleError<Customerdetaillong>('GetcustomerdetailLong')));
// }
//


// HandleError
private handdleError<T>( operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
// redirect to error
return of (result as T );
}
}


}
