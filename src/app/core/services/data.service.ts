import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Center, Professional } from 'src/app/shared/helpers/Interfaces';
import { catchError } from 'rxjs/operators';
import { SimpleError } from 'src/app/shared/helpers/Classes';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	count = 0;

	apiBaseUrl = environment.apiBaseUrl;

	constructor(private http: HttpClient) {}

	getAllCenters(): Observable<Center[] | SimpleError> {
		return this.http.get<Center[]>(this.toTheUrlOf('centers')).pipe(catchError((err) => this.handleHttpError(err)));
	}

	getCenterById(id: number): Observable<Center | SimpleError> {
		return this.http
			.get<Center>(this.toTheUrlOf('centers', id))
			.pipe(catchError((err) => this.handleHttpError(err)));
	}

	getAllProfessionals(): Observable<Professional[] | SimpleError> {
		return this.http
			.get<Professional[]>(this.toTheUrlOf('professionals'))
			.pipe(catchError((err) => this.handleHttpError(err)));
	}

	getProfessionalById(id: number): Observable<Professional | SimpleError> {
		return this.http
			.get<Professional>(this.toTheUrlOf('professionals', id))
			.pipe(catchError((err) => this.handleHttpError(err)));
	}

	handleHttpError(err: HttpErrorResponse): Observable<SimpleError> {
		const dataError = new SimpleError((this.count += 1), err.statusText, 'An error occured while retrieving data');
		return throwError(dataError);
	}

	toTheUrlOf(objectType: string, withId?: number, queryParams?: string): string {
		let url = `${this.apiBaseUrl}/${objectType}`;
		if (withId !== undefined) {
			url += `/${withId}`;
		}
		if (queryParams !== undefined) {
			url += `?${queryParams}`;
		}
		return url;
	}
}
