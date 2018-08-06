import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	galleries = [
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-1.jpg"},
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-2.jpg"},
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-3.jpg"},
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-4.jpg"},
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-5.jpg"},
			{img: "assets/namari-by-shapingrain/images/gallery-images/gallery-image-6.jpg"}
			];

  constructor() { }

  ngOnInit() {
  }

}
