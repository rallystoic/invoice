import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
// request & response
import { IssucceedInfomation, Rsinvoice, Total, RsInvoices } from '../models/ResponseEntities';
import { InvoicePayload, Iitemlist  } from '../models/RequestEntities';

import { Observable, of  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceserviceService {

constructor(
private http: HttpClient
) { }
// some setup before getting started
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
apiurl: string = environment.API_URL;
// some setup before getting started

// get value and return into itemliset
GenerateItem(strarr: string[]): Iitemlist {
const item = new Iitemlist();
item.description = strarr[0];
item.quantity = strarr[1];
item.price = strarr[2];
return item;
}

// generate an array of item object
Generateitemincollection(strarr: string[], strarr02: string[], strarr03: string[], strarr04: string[], strarr05: string[])
: Iitemlist[] {
const itemlists: Iitemlist[] = [];
// item1
const item1 = new Iitemlist();
item1.description = strarr[0];
item1.quantity = strarr[1];
item1.price = strarr[2];
itemlists.push(item1);
// item2
const item2 = new Iitemlist();
item2.description = strarr02[0];
item2.quantity = strarr02[1];
item2.price = strarr02[2];
itemlists.push(item2);
// item3
const item3 = new Iitemlist();
item3.description = strarr03[0];
item3.quantity = strarr03[1];
item3.price = strarr03[2];
itemlists.push(item3);
// item4
const item4 = new Iitemlist();
item4.description = strarr04[0];
item4.quantity = strarr04[1];
item4.price = strarr04[2];
itemlists.push(item4);
// item5
const item5 = new Iitemlist();
item5.description = strarr05[0];
item5.quantity = strarr05[1];
item5.price = strarr05[2];
itemlists.push(item5);

return itemlists ;
}

// Creating an invoice
CreateInvoice(invoicepayload: InvoicePayload): Observable<IssucceedInfomation> {
const url = `${this.apiurl}/api/items`;
return this.http.post<IssucceedInfomation>(url, invoicepayload, this.httpOptions)
.pipe(catchError(this.handdleError<IssucceedInfomation>('invoicepayload')));
}

// Invoicedetail
Invoicedetail(id: number): Observable<Rsinvoice> {
const url = `${this.apiurl}/api/invoice/detail/${id}`;
return this.http.get<Rsinvoice>(url, this.httpOptions)
.pipe(catchError(this.handdleError<Rsinvoice>('Invoicedetail')));
}

// collection of invoice list
invoicelist(id: number): Observable<RsInvoices[]> {
const url = `${this.apiurl}/api/invoice/page/${id}`;
return this.http.get<RsInvoices[]>(url, this.httpOptions)
.pipe(catchError(this.handdleError<RsInvoices[]>('invoicelist', [])));
}

// total of invoice oject
Totalinvoice(): Observable<Total> {
const url = `${this.apiurl}/api/invoice/total`;
return this.http.get<Total>(url, this.httpOptions)
.pipe(catchError(this.handdleError<Total>('invoicelist')));
}


// error
private handdleError<T>( operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
// redirect to error
return of (result as T );
}
// end of class
}
}
