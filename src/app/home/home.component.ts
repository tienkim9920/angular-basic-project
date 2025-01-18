import { CommonModule, NgIf } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from '../../services/BlogService';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { ProductItems } from '../shared/types/productItem';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setBlogList } from '../store/BlogStore/blog.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent, NgIf, CommonModule],
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

  blogs$: Observable<ProductItems[]>;

  constructor(
    private blogService: BlogService,
    private store: Store<AppState>
  ) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription();
    this.blogs$ = this.store.select((state) => state.blogs);
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
        this.store.dispatch(setBlogList({ blogs: res }));
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
    this.blogService.deleteBlog(id).subscribe(({ data }: any) => {
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
