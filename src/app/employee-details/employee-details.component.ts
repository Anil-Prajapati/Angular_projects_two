import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDemo1 } from '../employee-demo1';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

  id!: number;
  employee: EmployeeDemo1 = new EmployeeDemo1;

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
   this.employee=new EmployeeDemo1();
   this.id=this.route.snapshot.params['id']

   this.employeeService.getEmployee(this.id).subscribe((data)=>{
    console.log(data);
    this.employee=data;
   },error=>{
    console.log(error);
   })
    
   
  }
  list(){
    this.router.navigate(['/employees'])
  }

}
