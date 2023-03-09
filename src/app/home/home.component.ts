import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('headerFadeOut', [
      state('false', style({ opacity: 1 })),
      state('true', style({ opacity: 0 })),
      transition('false => true', animate(500)),
    ]),
    trigger('headerFadeAndEaseIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(1000, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  showTxt = '';
  isFadeOutStart = false;
  isHomeTextInit = false;
  i = 0;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter = () => {
    const txt = "Hi, I'm Elven.";
    if (this.i < txt.length) {
      this.showTxt += txt.charAt(this.i);
      this.i++;
      setTimeout(this.typeWriter, 100);
    } else {
      this.isFadeOutStart = true;
      setTimeout(() => {
        this.isHomeTextInit = true;
      }, 1000);
    }
  };
}
