import { Injectable } from '@angular/core';
import { ImdbService } from './imdb.service';

@Injectable({
  providedIn: 'root'
})
export class MpviesService {

  
  EmployeeDetails=[
    {id:'101',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'102',name:'Rahul Kumar Prajpati',phoneNumber:'9140465463',email:'rahul123@gmail.com',role:'Wev Developer'},
    {id:'103',name:'Akhil Singh',phoneNumber:'9670712990',email:'akhil@gmail.com',role:'JS Developer'},
    {id:'104',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'105',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'106',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'107',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'108',name:'ANil Kumar Prajpati',phoneNumber:'8081489506',email:'anilprajapati80814895@gmail.com',role:'Software Engineer'},
    {id:'102',name:'Rahul Kumar Prajpati',phoneNumber:'9140465463',email:'rahul123@gmail.com',role:'Wev Developer'},
    {id:'103',name:'Akhil Singh',phoneNumber:'9670712990',email:'akhil@gmail.com',role:'JS Developer'},
    {id:'102',name:'Rahul Kumar Prajpati',phoneNumber:'9140465463',email:'rahul123@gmail.com',role:'Wev Developer'},
    {id:'103',name:'Akhil Singh',phoneNumber:'9670712990',email:'akhil@gmail.com',role:'JS Developer'},
    {id:'102',name:'Rahul Kumar Prajpati',phoneNumber:'9140465463',email:'rahul123@gmail.com',role:'Wev Developer'},
    {id:'103',name:'Akhil Singh',phoneNumber:'9670712990',email:'akhil@gmail.com',role:'JS Developer'},
    {id:'102',name:'Rahul Kumar Prajpati',phoneNumber:'9140465463',email:'rahul123@gmail.com',role:'Wev Developer'},
    {id:'103',name:'Akhil Singh',phoneNumber:'9670712990',email:'akhil@gmail.com',role:'JS Developer'},
  ]
  constructor(private imdbObj:ImdbService) { 
     this.combindData();
  }

 private  combindData(){
  const getcombind=this.imdbObj.getAllCompany();
  this.EmployeeDetails=this.EmployeeDetails.map((empDetails:any)=>{
    const allcom = getcombind.find((comp)=>empDetails.id===comp.companyName);
    empDetails.comp=allcom?.companyName;
    return empDetails;
  })
  }

  getAllEmployeeDetailas(){
    return this.EmployeeDetails;
  }
  getFilterRole(role:string){
    return this.EmployeeDetails.filter((empDetails)=>empDetails.role===role)

  }
}
