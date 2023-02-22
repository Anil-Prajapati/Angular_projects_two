import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../services/employee';
import { EmployeeSeviceService } from '../services/employee-sevice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit{

  employees : Observable<Employee[]> | undefined; 


  constructor(private empService:EmployeeSeviceService, private router:Router){}

  ngOnInit(): void {
   this.reloadData();
  }

  reloadData(){
     this.employees=this.empService.getEmployeeList()
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployee(id)
    .subscribe(data=>{
      console.log(data);
      this.reloadData();
    },err=>{
      console.log(err);
    })
    
  }

  employeeDetails(id:number){
  this.router.navigate(['Details',id]);
 }
 
 updateEmployee(id:number){
  this.router.navigate(['Upadte',id]);
 }

}
