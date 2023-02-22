import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private httpClient:HttpClient) { }

  //this is the getting the data as single format using id
  getEmployee(id:number): Observable<any>{

    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  //save the data into the data bases
  craeteEmployee(employees:Object):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employees)
  }

  //update the employee using id
  updateEmployee(id:number, value:any):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,value)
  }

//delete the employee using id
  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  //get all the employee in one time
  ListEmployee():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`)
  }
}
