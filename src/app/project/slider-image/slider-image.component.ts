import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss']
})
export class SliderImageComponent {
  imagePaths = [
    '/assets/images/kong-cha1.png',
    '/assets/images/kong-cha2.png',
  ]
  currentIndex = 0;

  handlePrev = () => {
    this.currentIndex = this.currentIndex-1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imagePaths.length-1;
    }
  }

  handleNext = () => {
    this.currentIndex = this.currentIndex+1;
    if (this.currentIndex > this.imagePaths.length - 1) {
      this.currentIndex = 0;
    }
  }
}
