import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shen-button',
  imports: [],
  templateUrl: './button.component.html',
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
