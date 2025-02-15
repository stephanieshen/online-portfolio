import { Component } from '@angular/core';
import { DataItem, WHAT_I_DO } from '../constants';
import { CircleIconComponent } from '../shared/components/circle-icon/circle-icon.component';

@Component({
  selector: 'shen-what-i-do',
  imports: [
    CircleIconComponent
  ],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.scss'
})
export class WhatIDoComponent {

  items: DataItem[] = WHAT_I_DO;
}
