import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled-one',
  templateUrl: './chiled-one.component.html',
  styleUrls: ['./chiled-one.component.css'],
  inputs:['chileda','chiled','parentName','chiled2']
})
export class ChiledOneComponent implements OnInit{

  parentName:any
  chileda:any
  chiled:any
  chiled2:any

constructor(){

}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
