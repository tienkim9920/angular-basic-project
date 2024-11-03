import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderLayoutComponent,
    FormsModule,
    CurrencyPipe,
    UpperCasePipe,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  isVisible = false;

  products = [
    { name: 'samba og', price: 400000, image: 'assets/images/samba-og.jpg' },
    { name: 'nike f1', price: 500000, image: 'assets/images/samba-og.jpg' },
    { name: 'addidas f2', price: 600000, image: 'assets/images/samba-og.jpg' },
    { name: 'mlb f3', price: 700000, image: 'assets/images/samba-og.jpg' },
  ];

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  updateField(): void {
    console.log('Hello world');
  }
}
