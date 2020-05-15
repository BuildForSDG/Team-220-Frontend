import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
	@Input('backgroundGray') public backgroundGray;

	public carouselOptions: NguCarouselConfig;

	public testimonials = [
		{
			logo: 'assets/images/mock-logo-4.png',
			photo: 'assets/images/face-1.jpg',
			text: `“Our society tends to regard as a sickness any mode of thought or behavior that is inconvenient for the system
			 and this is plausible because when an individual doesn't fit into the system it causes pain to the individual as well
			  as problems for the system...”`,
			title: 'Theodore Kaczynski',
			subtitle: 'Recovering from Mental Disorder'
		},
		{
			logo: 'assets/images/mock-logo-2.png',
			photo: 'assets/images/face-2.jpg',
			text: `"It is naively assumed that the fact that the majority of people share certain ideas and feelings proves the
			 validity of these ideas and feelings. Nothing could be further from the truth. Consensual validation as such has no
			  bearing on reason or mental health."`,
			title: 'Jasmine Warga',
			subtitle: 'Ancient Chronic Pain Patient'
		},
		{
			logo: 'assets/images/mock-logo-3.png',
			photo: 'assets/images/face-3.jpg',
			text: `"The pain of severe depression is quite unimaginable to those who have not suffered it, and it kills in many
			 instances because its anguish can no longer be borne. The prevention of many suicides will continue to be hindered
			  until there is a general awareness of the nature of this pain."`,
			title: 'William Styron',
			subtitle: 'No more in Madness'
		}
	];

	ngOnInit() {
		this.carouselOptions = {
			grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
			slide: 2,
			speed: 400,
			interval: { timing: 4000 },
			point: {
				visible: true
			},
			load: 2,
			touch: true,
			loop: true
		};
	}
}
