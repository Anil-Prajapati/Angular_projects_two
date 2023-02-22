import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-driven-demo',
  templateUrl: './form-driven-demo.component.html',
  styleUrls: ['./form-driven-demo.component.css']
})
export class FormDrivenDemoComponent implements OnInit{
  registration:any

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    //this.intilizationMyForm();
    this.initilizationMyFormUsingBuilder();
  }

  intilizationMyForm(){
    this.registration=new FormGroup({
      firstName:new FormControl('Anil',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl(),
      Address:new FormGroup({
        city:new FormControl(),
        state:new FormControl(),
      }),

    });
  }

  initilizationMyFormUsingBuilder(){
    this.registration=this.formBuilder.group({
      firstName:new FormControl('Anil',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl(),
      Address:new FormGroup({
        city:new FormControl(),
        state:new FormControl(),
    }),
  });
  }
  submittedRegistrationForm(registration:NgForm){
    console.log(registration);
  }
}
