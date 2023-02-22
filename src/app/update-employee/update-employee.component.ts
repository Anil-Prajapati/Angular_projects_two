import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDemo1 } from '../employee-demo1';
import Swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  emp:any
  id!: number;
  employee: EmployeeDemo1 = new EmployeeDemo1;
  submitted=false;
  
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService,private router:Router){}
  
  ngOnInit(): void {
    this.employee=new EmployeeDemo1();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    },(error=>{
      console.log(error);
    }))
     
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>console.log(data),error=>console.log(error));
    //this.employee=new EmployeeDemo1();
    this.gotoList()
  }

  UpdateEmployee(emp:any){
    Swal.fire('Congratualation!','Your Data Updated SuccessFully!','success');
  }

  onSubmit(){
    this.submitted=true;
    this.updateEmployee();
  }
  gotoList(){
    this.router.navigate(['/employees'])
  }

}
