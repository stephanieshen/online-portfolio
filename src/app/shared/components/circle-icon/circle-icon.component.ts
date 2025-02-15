import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shen-circle-icon',
  imports: [CommonModule],
  templateUrl: './circle-icon.component.html',
  styleUrl: './circle-icon.component.scss'
})
export class CircleIconComponent {

  @Input() text!: string;
  @Input() icon!: string | undefined;
  @Input() classes!: string;
  @Output() iconClick: EventEmitter<void> = new EventEmitter();

  onIconClick(): void {
    this.iconClick.emit();
  }
}
