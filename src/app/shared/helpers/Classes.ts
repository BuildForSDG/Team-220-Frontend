/* eslint-disable max-classes-per-file */

import { PageEvent } from '@angular/material/paginator';

export class Helper {}
export class SimpleError {
	errorNumber: number;

	message: string;

	userFriendlyMessage: string;

	constructor(errorNumber?: number, message?: string, userFriendlyMessage?: string) {
		this.errorNumber = errorNumber;
		this.message = message;
		this.userFriendlyMessage = userFriendlyMessage;
	}
}
export class PaginatorConfigurable {
	// MatPaginator Inputs
	length: number;

	pageSize: number;

	pageSizeOptions: number[];

	// MatPaginator Output
	pageEvent: PageEvent;

	constructor(length = 100, pageSize = 10, pageSizeOptions: number[] = [5, 10, 25, 100]) {
		this.length = length;
		this.pageSize = pageSize;
		this.pageSizeOptions = pageSizeOptions;
		this.pageEvent = new PageEvent();
		this.pageEvent.pageIndex = 0;
		this.pageEvent.pageSize = pageSize;
		this.pageEvent.length = length;
	}

	setPageSizeOptions(setPageSizeOptionsInput: string): void {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((str) => +str);
	}
}
