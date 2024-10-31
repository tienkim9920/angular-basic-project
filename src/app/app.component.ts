import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  updateField(): void {
    console.log('Hello world');
  }
}
