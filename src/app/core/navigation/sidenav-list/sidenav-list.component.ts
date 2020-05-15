import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
	@Output() sidenavClose = new EventEmitter();

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	ngOnInit(): void {}

	public onSidenavClose = () => {
		this.sidenavClose.emit();
	};
}
