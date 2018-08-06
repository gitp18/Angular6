import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
	testimonials = {};
  constructor(private config:ConfigService) { }
	getTestimonial(){return this.config.getConfig().testimonials;}
  ngOnInit() {this.testimonials = this.getTestimonial();
  }

}
