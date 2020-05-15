import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpEventType,
	HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from '../services/http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
	constructor(private cacheService: HttpCacheService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// pass along non-cacheable requests
		if (req.method !== 'GET') {
			this.cacheService.invalidateCache();
			return next.handle(req);
		}

		// attempt to retrieve a cached response
		const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

		// return cached response
		if (cachedResponse) {
			return of(cachedResponse);
		}

		// send request to server and add response to cache
		return next.handle(req).pipe(
			tap((event) => {
				if (event instanceof HttpResponse) {
					this.cacheService.put(req.url, event);
				}
			})
		);
	}
}
