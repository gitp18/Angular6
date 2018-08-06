import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
	testimonials = {
		tagLine: "FEEDBACK",
		title: "What our customers are saying",
		testimonial: [
						{userImg: "../assets/namari-by-shapingrain/images/user-images/user-1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", by: "John Doe - Happy Customer"},
						{userImg: "../assets/namari-by-shapingrain/images/user-images/user-2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", by: "Roslyn Doe - Happy Customer"},
						{userImg: "../assets/namari-by-shapingrain/images/user-images/user-3.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", by: "Thomas Doe - Happy Customer"}
					]
	};
  constructor() { }

  ngOnInit() {
  }

}
