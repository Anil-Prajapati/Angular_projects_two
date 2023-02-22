import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, map, mergeMap, of, range, zip } from 'rxjs';

@Component({
  selector: 'app-obserbaledemo3',
  templateUrl: './obserbaledemo3.component.html',
  styleUrls: ['./obserbaledemo3.component.css']
})
export class Obserbaledemo3Component implements OnInit{

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.ZipDemo();
    this.fecthDataFromMultipleAPIs();
    this.RangeDemo();
    this.withoutMergeMapDemo();
    this.mergeMapDemo();

  }

  ZipDemo(){
const ages=[22,25,23,22]
const names=['ANil','Akhil','vaibhav','Devendra']
const roles=['developer','developer','bussnous','Developer']

const findAll=zip(ages,names,roles);
findAll.subscribe((data)=>{
  console.log(data)
})
  }

  fecthDataFromMultipleAPIs(){

    const request1=this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    const request2=this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    const request3=this.httpClient.get('https://jsonplaceholder.typicode.com/users');

    const fetchDataToApi=forkJoin({request1,request2,request3});
    fetchDataToApi.subscribe((val)=>{
      console.log(val);
    },(err)=>{
      console.log(err);
    })
  }

  RangeDemo(){
    const numbers=range(1,20);
    const squrate=numbers.pipe(map((ele)=>ele * ele));
    squrate.subscribe((val)=>{
      console.log(val);
      
    });
   
  }
  withoutMergeMapDemo() {
    const usersPublisher = of(1, 2, 3, 4);
    usersPublisher.subscribe((user) => {
      const url = `https://jsonplaceholder.typicode.com/users/${user}`; //1-30  2-10 3-5 4-10
      this.httpClient.get(url).subscribe((userData) => {
        console.log(userData);
      });
    });
  }
  mergeMapDemo() {
    const usersPublisher = of(1, 2, 3, 4);

    usersPublisher.pipe(mergeMap((user)=>{
      const userDetails = `https://jsonplaceholder.typicode.com/users/${user}`;
      return this.httpClient.get(userDetails);
    })).subscribe(userInfo=>{
      console.log(userInfo);
    });

  }


}
