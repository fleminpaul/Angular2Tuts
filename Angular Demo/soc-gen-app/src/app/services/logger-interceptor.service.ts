import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    //console.log("Logger Interceptor!");
    return next.handle(req)
      .do(response=>{
        console.log(response);
        return response;
      })
  }
}
