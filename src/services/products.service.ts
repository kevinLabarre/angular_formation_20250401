import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:3001/products'

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Iproducts[]> {
    return this.httpClient.get<Iproducts[]>(this.baseUrl)
  }

}
