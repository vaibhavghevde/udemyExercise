import { tap } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('this is the logging interceptor intercepting the REQUEST');
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(
      tap((event) => {
        console.log(
          'this is the logging interceptor intercepting the RESPONSE'
        );
        console.log(event);
      })
    );
  }
}
