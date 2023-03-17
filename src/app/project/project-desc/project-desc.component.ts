import { Component } from '@angular/core';
import { faXmark, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-project-desc',
  templateUrl: './project-desc.component.html',
  styleUrls: ['./project-desc.component.scss'],
})
export class ProjectDescComponent {
  faInfo = faInfo;
  faCircle = faCircle;
  faXmark = faXmark;

  isDetails = false;

  onClickDetails = () => {
    this.isDetails = true;
  };

  onClickClose = () => {
    this.isDetails = false;
  };
}
