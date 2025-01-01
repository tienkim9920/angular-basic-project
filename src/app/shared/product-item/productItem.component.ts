import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { ProductItems } from '../types/productItem';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CurrencyPipe,
    UpperCasePipe,
    NgFor,
    NgIf,
    RouterLink,
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.css',
})
export class ProductItemComponent implements OnChanges, OnDestroy {
  @Input() products: ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return sum;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    console.log('Component is removed');
  }

  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
  };
}
