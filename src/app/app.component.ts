import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    WhatIDoComponent,
    ToolsComponent,
    ProjectGalleryComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-portfolio';
}
