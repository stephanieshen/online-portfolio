import { Component } from '@angular/core';
import { CircleIconComponent } from '../shared/components/circle-icon/circle-icon.component';
import { DataItem, TOOLS } from '../constants';

@Component({
  selector: 'shen-tools',
  imports: [
    CircleIconComponent
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  tools: DataItem[] = TOOLS;
}
