import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isActive = false;
  isScroll = false;

  toggleClick = () => {
    this.isActive = !this.isActive
  };

  inactiveClick = () => {
    this.isActive = false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 1) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
