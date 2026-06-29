import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shen-button',
  imports: [],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() classes!: string;
  @Input() disabled: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit();
  }
}
