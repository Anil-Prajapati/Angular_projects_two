import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})export class EmployeeSeviceService {

  //this is the my base url this is the url is provided by spring boot 
  private baseURl='http://localhost:8080/springboot-crud-rest/api/v1/employees';


  //this is the httpClicnt is the give the permissin to get and delete and create update data
  constructor(private httpClient:HttpClient) { }


//this is the get only one employee using id
  getEmployee(id:number):Observable<any> {
    return this.httpClient.get(`${this.baseURl}/${id}`);
  }

  //this is the method saving the data into the data bases
  createEmployee(employee:Object) :Observable<Object>{
    return this.httpClient.post(`${this.baseURl}`,employee);
  }

  //this is the updating the data into the data bases
  updateEmployee(id:number,value:any): Observable<Object>{
    return this.httpClient.put(`${this.baseURl}/${id}`,value);
  }

  //this are the delete data using id,what you want to delete the data using id we have to delete 
  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseURl}/${id}`, {responseType:'text'})
  }
    
  //get all the employee in one time
  getEmployeeList():Observable<any>{
     return this.httpClient.get(`${this.baseURl}`)
  }
}
