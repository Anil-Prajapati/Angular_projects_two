import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit{

  prodId:any
  prod:any
  constructor(private activatedRoute:ActivatedRoute,private httpClient:HttpClient){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.prodId=params['id'];

      this.httpClient.get(`https://fakestoreapi.com/products/${this.prodId}`).subscribe
      (response=>{
        this.prod=response;
      })
    })
    
    
  }

}
