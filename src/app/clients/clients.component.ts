import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
	clients = {
		tagLine: "TRUST",
		title: "Companies who use our services",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
		images: [
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo1.png", text: "Tree"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo2.png", text: "Fingerprint"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo3.png", text: "The Man"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo4.png", text: "Mustache"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo5.png", text: "Goat"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo6.png", text: "Justice"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo7.png", text: "Ball"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo8.png", text: "Cold"},
			{src: "../assets/namari-by-shapingrain/images/company-images/company-logo9.png", text: "Cold"}
		]
	};

  constructor() { }

  ngOnInit() {
  }

}
