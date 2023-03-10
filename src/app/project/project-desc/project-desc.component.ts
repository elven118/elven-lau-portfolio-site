import { Component } from '@angular/core';

@Component({
  selector: 'app-project-desc',
  templateUrl: './project-desc.component.html',
  styleUrls: ['./project-desc.component.scss']
})
export class ProjectDescComponent {
  isDetails = false

  onClickDetails = () => {
    this.isDetails = true
  }

  onClickClose = () => {
    this.isDetails = false
  }
}
