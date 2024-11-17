import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  isVisible = false;

  products: ProductItems[] = [
    {
      id: 1,
      name: 'samba og',
      price: 400000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 2,
      name: 'nike f1',
      price: 500000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 3,
      name: 'addidas f2',
      price: 600000,
      image: 'assets/images/samba-og.jpg',
    },
    {
      id: 4,
      name: 'mlb f3',
      price: 700000,
      image: 'assets/images/samba-og.jpg',
    },
  ];

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  handleDelete = (id: number) => {
    const productIndex = this.products.findIndex(item => item.id == id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }

  updateField(): void {
    console.log('Hello world');
  }
}
