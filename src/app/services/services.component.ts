import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
	services = {
		tagLine: "BELIEVING",
		title: "Focusing On What Matters Most",
		testimonial: {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut	labore et dolore magna aliqua", by: "— John Doe, Happy Customer"},
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do	eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
		desc1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		desc2: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!",
		img: "../assets/namari-by-shapingrain/images/dancer.jpg",
		videoUrl: "/",
		videoId: "UYJ5IjBRlW8"
	};

  constructor() { }

  ngOnInit() {
  }

}
