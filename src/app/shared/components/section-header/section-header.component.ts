import { Component, Input } from '@angular/core';

@Component({
  selector: 'shen-section-header',
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {

  @Input() classes!: string;
}
