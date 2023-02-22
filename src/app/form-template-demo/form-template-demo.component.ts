import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-demo',
  templateUrl: './form-template-demo.component.html',
  styleUrls: ['./form-template-demo.component.css']
})
export class FormTemplateDemoComponent implements OnInit{


  ngOnInit(): void {
    
  }

  user={
       firstName:'Anil',
       lastName:'Prajapati',
       email:'anil@gmail.com',
       phoneNumber:'8081489506',
       Address:{
         street:'',
         city:'',
         state:''
       },
  }
  submittedMyForm(myForm:NgForm){
    console.log(myForm);
  }

}
