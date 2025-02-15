import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { DataItem, SOCIALS } from '../constants';
import { CircleIconComponent } from '../shared/components/circle-icon/circle-icon.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'shen-header',
  imports: [
    ButtonComponent,
    CircleIconComponent,
    NavigationComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  socials: DataItem[] = SOCIALS;

  onIconClick(social: DataItem): void {
    if (social.title === 'email') {
      window.location.assign(`mailto:${social.url}`);
      return;
    }
    window.open(social.url, '_blank');
  }

  openResume(): void {
    window.open('assets/pdfs/shensabado.pdf', '_blank');
  }
}
