import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  templateUrl: './form-demo1.component.html',
  styleUrls: ['./form-demo1.component.css']
})
export class FormDemo1Component  implements OnInit{

  name:string='';
  age:number=0;
  
  ngOnInit(): void {
   
  }
  submitMyForm(myForm:NgForm){
     console.log(myForm);
  }

}
