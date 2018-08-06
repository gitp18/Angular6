import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	home = {
		heading: "A FREE AND SIMPLE LANDING PAGE",
		headerText: "Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!",
		btnText: "START CREATING TODAY",
		btnLink: "\home"
	};

  constructor() { }

  ngOnInit() {
  }

}
