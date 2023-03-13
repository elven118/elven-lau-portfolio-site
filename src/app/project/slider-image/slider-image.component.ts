import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss'],
})
export class SliderImageComponent {
  @Input() imagePaths: string[] = [];
  @ViewChild('imageSlide') private imageSlideRef: ElementRef | undefined;
  // For Image container width
  @ViewChildren('image') private imageRefs: QueryList<ElementRef> =
    new QueryList();
  currentIndex = 0;
  currImgWidth = 0;

  onFirstImageLoad() {
    this.handleChangePage(0);
  }

  handleChangePage = (i: number) => {
    this.currentIndex = i;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imagePaths.length - 1;
    }
    if (this.currentIndex > this.imagePaths.length - 1) {
      this.currentIndex = 0;
    }
    this.imageSlideRef!.nativeElement.style.transform =
      'translateX(' +
      -this.imageRefs.reduce(
        (sum, next, curIndex) =>
          curIndex < this.currentIndex ? sum + next.nativeElement.width : sum,
        0
      ) +
      'px)';
    this.currImgWidth = this.imageRefs.get(
      this.currentIndex
    )?.nativeElement.width - 1;
  }
}
