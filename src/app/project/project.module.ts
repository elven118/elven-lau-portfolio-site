import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDescComponent } from './project-desc/project-desc.component';

@NgModule({
  declarations: [ProjectComponent, SliderImageComponent, ProjectDescComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
