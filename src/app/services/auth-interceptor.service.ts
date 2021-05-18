import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
	constructor(private router: Router, private route: ActivatedRoute) {}

	handleError(err: HttpErrorResponse){
		if (this.router.url !== '/login' && (err.status === 401 || err.status === 403)) {
			this.router.navigate(['/login']);
		}
		return throwError(err);
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		return next.handle(req)
		.pipe(
			catchError((err: HttpErrorResponse) => {
				if (this.router.url !== '/login' && (err.status === 401 || err.status === 403)) {
					this.router.navigate(['/login', {returnUrl: this.route.snapshot['_routerState'].url}]);
				}
				return throwError(err);
			})
		);
	};
}