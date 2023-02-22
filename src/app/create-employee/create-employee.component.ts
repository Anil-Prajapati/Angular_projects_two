import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeDemo1 } from '../employee-demo1';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
emp:any
employee:EmployeeDemo1 = new EmployeeDemo1();
submitted=false;

constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    
  }

  newEmployee():void{
    this.submitted=false;
    this.employee=new EmployeeDemo1();
  }

  UpdateEmployee(emp:any){
    Swal.fire('Congratualation!','Your Data Inserted SuccessFully!','success');
  }
  savingdata(){
    this.employeeService.craeteEmployee(this.employee)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
    this.employee=new EmployeeDemo1();
    this.gotoList();
  }

onSubmit(){
  this.submitted=true;
  this.savingdata();
}

gotoList(){
   this.router.navigate(['/employees'])
}

}
