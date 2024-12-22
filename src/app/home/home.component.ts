import { NgIf } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from '../../services/BlogService';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { ProductItems } from '../shared/types/productItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  isVisible = true;

  getBlogApi: Subscription;

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

  constructor(private blogService: BlogService) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService.getBlogs().subscribe(({ data }) => {
      this.products = data.map((item: any) => {
        return {
          ...item,
          name: item.title,
          price: Number(item.body),
          image: 'assets/images/samba-og.jpg',
        };
      });
    });
  }

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribed');
    }
  }

  handleClickMe(): void {
    this.clickMessage = 'Click Me Hello World';
  }

  handleDelete = (id: number) => {
    this.products = this.products.filter((item) => item.id !== id);
  };

  handleChangeVisible = () => {
    this.isVisible = false;
  };

  updateField(): void {
    console.log('Hello world');
  }
}
