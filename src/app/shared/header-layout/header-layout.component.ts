import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-layout',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css'],
})
export class HeaderLayoutComponent {
  title = 'angular-basic-project';
}
