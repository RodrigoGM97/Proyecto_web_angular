import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = ['../../assets/img/carousel1.jpg', '../../assets/img/carousel2.jpg', '../../assets/img/carousel3.jpg'];

}