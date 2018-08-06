import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
	pricing = {
		tagLine: "YOUR CHOICE",
		title: "We have the right package for you",
		types: [   
			{pricingFor: "Personal", title: "The standard version", cost:19, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contents: ["5 Downloads", "2 Extensions", "Tutorials", "Forum Support", "1 year free updates"]},
			{pricingFor: "Student", title: "Most popular choice", cost:29, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contents: ["15 Downloads", "5 Extensions", "Tutorials with Files", "Forum Support", "2 years free updates"]},
			{pricingFor: "Business", title: "For the whole team", cost:49, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", contents: ["Unlimited Downloads","Unlimited Extensions","HD Video Tutorials","Chat Support","Lifetime free updates"]}
		]
	};
  constructor() { }

  ngOnInit() {
  }

}
