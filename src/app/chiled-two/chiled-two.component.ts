import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled-two',
  templateUrl: './chiled-two.component.html',
  styleUrls: ['./chiled-two.component.css'],
  outputs:['parentName','addEvent'],
  inputs:['chiledb','chiledTwo','chileda']
})
export class ChiledTwoComponent implements OnInit{
  parentName:string="Sachin Tendulakar";

  chileda:any

  chiledb:any
  chiledTwo:any

  Swtalert(){
     alert('this is the chiled-two class data...')
  }
  addEvent=new EventEmitter();
    sendDataToParent(){
     this.addEvent.emit(this.parentName);
  }

  constructor(){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
