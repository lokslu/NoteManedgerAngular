import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/do';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const dummyrequest = req.clone({
            setHeaders: {
                //'Authorization':localStorage.getItem('access_token'),
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                 
            }
            
        });
        console.log("ddd");
        return next.handle(dummyrequest);
    }
}
