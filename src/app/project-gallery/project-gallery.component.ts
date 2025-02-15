import { Component } from '@angular/core';
import { DataItem, PROJECTS } from '../constants';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'shen-project-gallery',
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.scss'
})
export class ProjectGalleryComponent {

  projects: DataItem[] = PROJECTS;

  openProject(url: string): void {
    window.open(url, '_blank');
  }
}
