import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inject:Injector) { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('UserDetails')).success.token
      }
    })
    return next.handle(tokenizedReq)
  }

  
}
