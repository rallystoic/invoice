import { Injectable } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import {
HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
constructor(private auth: AuthserviceService  ) {
}

intercept(req: HttpRequest<any>, next: HttpHandler) {
// get the auth token from the service.
const authToken = this.auth.getAuthorizationToken();

// clone the request and replace the original header
// with  cloned headers, update with authorization
const authReq = req.clone({
headers: req.headers.set('Authorization', authToken)
});

return next.handle(authReq);
}




}
