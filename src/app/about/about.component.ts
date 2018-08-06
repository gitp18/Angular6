import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	about = {
		tagLine: "SUCCESS",
		title: "How We Help You To Sell Your Product",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
		features: [
					{icon: "html5", title: "HTML5", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"},
					{icon: "bolt", title: "Easy to Use", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"},
					{icon: "tablet", title: "Fully Responsive", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"},
					{icon: "rocket", title: "Parallax Effect", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"}
				]
	};
  constructor() { }
  ngOnInit() {
	}
	
}
