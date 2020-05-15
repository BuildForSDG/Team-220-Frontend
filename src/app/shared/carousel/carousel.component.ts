/* eslint-disable no-multi-assign */
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { slider } from './carousel.animation';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css'],
	animations: [slider],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
	imgags = [
		'assets/img/1.png',
		'assets/img/2.png',
		'assets/img/3.png',
		'assets/img/4.png',
		'assets/img/5.png',
		'assets/img/6.png',
		'assets/img/7.png',
		'assets/img/8.png',
		'assets/img/9.png',
		'assets/img/10.png',
		'assets/img/11.png',
		'assets/img/12.png',
		'assets/img/13.png',
		'assets/img/14.png',
		'assets/img/15.png',
		'assets/img/16.png',
		'assets/img/17.png',
		'assets/img/18.png',
		'assets/img/19.png',
		'assets/img/20.png',
		'assets/img/21.png',
		'assets/img/22.png',
		'assets/img/23.png',
		'assets/img/24.png',
		'assets/img/25.png',
		'assets/img/26.png',
		'assets/img/27.png',
		'assets/img/28.png',
		'assets/img/29.png',
		'assets/img/31.png',
		'assets/img/32.png',
		'assets/img/33.png',
		'assets/img/34.png'
	];

	quotes = [
		{
			id: 0,
			content:
				'Maybe we all have darkness inside of us and some of us are better at dealing with it than others.',
			author: 'Jasmine Warga'
		},
		{
			id: 1,
			content: 'The bravest thing I ever did was continuing my life when I wanted to die.',
			author: 'Juliette Lewis'
		},
		{
			id: 2,
			// tslint:disable-next-line: quotemark
			content: "There is hope, even when your brain tells you there isn't.",
			author: 'John Green'
		}
	];

	public carouselTileItems$: Observable<number[]>;

	public carouselTileConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		speed: 250,
		point: {
			visible: true
		},
		touch: true,
		loop: true,
		interval: { timing: 2500 },
		animation: 'lazy'
	};

	tempData: any[];

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.tempData = [];
		this.carouselTileItems$ = interval(500).pipe(
			startWith(-1),
			take(5),
			map((val) => {
				const data = (this.tempData = [
					...this.tempData,
					this.imgags[Math.floor(Math.random() * this.imgags.length)]
				]);
				return data;
			})
		);
	}
}
