import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../interfaces/Iproduct';
import { IproductDw } from '../interfaces/IproductDw';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:3001/products'
  private baseUrlDwStore: string = 'http://localhost:3001/dw_store'

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Iproducts[]> {
    return this.httpClient.get<Iproducts[]>(this.baseUrl)
  }

  public getDwProducts(): Observable<IproductDw[]> {
    return this.httpClient.get<IproductDw[]>(this.baseUrlDwStore)
  }

  public getDwProductById(id: number): Observable<IproductDw> {
    return this.httpClient.get<IproductDw>(`${this.baseUrlDwStore}/${id}`)
  }

}
