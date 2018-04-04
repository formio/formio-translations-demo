import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PhraseappInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessRequest = request.clone({
      headers: request.headers.set('Authorization', environment.phraseAppToken)
    });
    return next.handle(accessRequest);
  }
}


