import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDescComponent } from './project-desc/project-desc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjectComponent, SliderImageComponent, ProjectDescComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
