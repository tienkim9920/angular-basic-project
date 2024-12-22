import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../app/shared/types/responseData';
import { ProductItems } from '../app/shared/types/productItem';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<ResponseData<ProductItems[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
  }
}
