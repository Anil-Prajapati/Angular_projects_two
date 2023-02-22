import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy-product',
  templateUrl: './dummy-product.component.html',
  styleUrls: ['./dummy-product.component.css']
})
export class DummyProductComponent implements OnInit{

  allProduct:any[]=[];

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((response:any)=>{
          this.allProduct=response.product.product;
    })  
    
  }

}
