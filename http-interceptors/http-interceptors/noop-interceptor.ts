import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router} from '@angular/router';




// import { Observable, pipe,of } from 'rxjs';
// import { catchError,map,tap,} from 'rxjs/operators';
// import { RouterModule, Router } from '@angular/router';
/** Pass untouched request through to the next request handler. */
@Injectable(   )
export class NoopInterceptor implements HttpInterceptor {
    constructor(
         private router: Router
    ){}
intercept(req: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>> {
// Observable httpresponse return 401 Unauthorized 
// redirect to /login page
    return next.handle(req).pipe(catchError(this.handleError2<any>(HttpResponse)));

}
handleError2<T>(result: T) {
return (error: any): Observable<T> => {
if (error.status === 401 || error.status === 403) {
console.log('test');
localStorage.clear();
window.location.reload();
// this.router.navigate(['/admin/login']);
return of (result as T);
}
return of (result as T) ;
}
}




}

