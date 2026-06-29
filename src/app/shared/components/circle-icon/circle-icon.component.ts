
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shen-circle-icon',
  imports: [],
  templateUrl: './circle-icon.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
