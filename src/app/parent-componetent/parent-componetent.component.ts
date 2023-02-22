import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-componetent',
  templateUrl: './parent-componetent.component.html',
  styleUrls: ['./parent-componetent.component.css']
})
export class ParentComponetentComponent implements OnInit{


  name='Anil Kumar Prajapati';
  a:number=10;
  b:number=20;
  pName:string='';
  addEvent:any


  reciveSendChild(parentName:string){
    this.addEvent=parentName;
  }
  constructor(){

  }
  
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


}
