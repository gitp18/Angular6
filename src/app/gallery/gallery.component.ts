import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	galleries = [];

  constructor(private config : ConfigService) { }
	getGallery(){return this.config.getConfig().galleries;}
  ngOnInit() {this.galleries = this.getGallery();
  }

}
