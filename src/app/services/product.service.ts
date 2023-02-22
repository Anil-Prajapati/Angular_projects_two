import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.getAllProduct();
    
  }

  getAllProduct(){
    return this.httpClient.get('https://dummyjson.com/products');
  }
}
