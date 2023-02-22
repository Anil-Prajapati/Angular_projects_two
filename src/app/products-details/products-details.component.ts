import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{

  prodId:any
  prod:any
  constructor(private activatedRoute:ActivatedRoute,private httpClient:HttpClient){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.prodId=params['id'];

      this.httpClient.get(`https://fakestoreapi.com/products/${this.prodId}`).subscribe(response=>{
        this.prod=response;
      })
    })

  
  }

}
