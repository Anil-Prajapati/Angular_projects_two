import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as data from './products_data.json';

@Component({
  selector: 'app-contractsjob',
  templateUrl: './contractsjob.component.html',
  styleUrls: ['./contractsjob.component.css']
})
export class ContractsjobComponent implements OnInit{

  products= ( data as any).default;
  p:number=2;
  searchText:string='';

  ngOnInit(): void {
    
  }
  addToCart(prod:any) {
    Swal.fire('Congratulations!', 'Your Item is added to cart!', 'success');
    
  }
  sortAsc(){
    this.products = this.products.sort((p1:any,p2:any)=>p1.price-p2.price)
  }
  sortDesc(){
    this.products = this.products.sort((p1:any,p2:any)=>p2.price-p1.price)
  }

}
