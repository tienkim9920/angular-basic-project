import { NgIf } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from '../../services/BlogService';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { ProductItems } from '../shared/types/productItem';
import { filter, map, Subscription } from 'rxjs';

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

  products: ProductItems[] = [];

  constructor(private blogService: BlogService) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService
      .getBlogs()
      .pipe(
        map(({ data }) =>
          data
            .map((item: any) => {
              return {
                ...item,
                name: item.title,
                price: Number(item.body),
                image: 'assets/images/samba-og.webp',
              };
            })
            .filter((product) => product.price > 300000)
        )
      )
      .subscribe((res) => {
        this.products = res;
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
    this.blogService.deleteBlog(id).subscribe(({ data}: any) => {
      if (data == 1) {
        this.products = this.products.filter((item) => item.id !== id);
      }
    });
  };

  handleChangeVisible = () => {
    this.isVisible = false;
  };

  updateField(): void {
    console.log('Hello world');
  }
}
