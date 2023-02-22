import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { EmployeeDemo1 } from '../employee-demo1';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!:Observable<EmployeeDemo1[]>

  constructor(private employeeService:EmployeeService,private routers:Router){}


  ngOnInit(): void {
    this.realodEmployee();
  }
  
  AddEmployee(emp:any){
    Swal.fire('Congratualation !','Possible To See Your Data SuccessFully !','success');
  }
  UpdateEmployee(emp:any){
    Swal.fire('Congratualation!','Your Data Updated SuccessFully!','success');
  }
   DeleteEmployee(emp:any){
    Swal.fire('Congratualation!','Your Data Deleted SuccessFully!','success');
  }
  //there is i m getting all the employees
  realodEmployee(){
    this.employees=this.employeeService.ListEmployee();
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe((res)=>{
      console.log(res);
      this.realodEmployee();
    },(error)=>{
      console.log(error);
    })
  }

  employeeDetails(id:number){
    this.routers.navigate(['details',id]);
  }

  updateEmployee(id:number){
    this.routers.navigate(['update',id]);
  }


}
