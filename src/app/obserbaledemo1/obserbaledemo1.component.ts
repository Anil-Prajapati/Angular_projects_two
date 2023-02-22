import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obserbaledemo1',
  templateUrl: './obserbaledemo1.component.html',
  styleUrls: ['./obserbaledemo1.component.css']
})
export class Obserbaledemo1Component implements OnInit{

  constructor(private httpClient:HttpClient){}



  ngOnInit(): void {
    this.DemoFetch();
    this.ObserbleDemo();
  }

  DemoFetch(){
    const  promisseObject=fetch('http://jsonplaceholder.typicode.com/users');
      console.log(promisseObject)
    promisseObject.then((res)=>{
      console.log(res);
    },(err)=>{
       console.log(err);
    })

  }

 ObserbleDemo(){
   const obserbledemo=this.httpClient.get('http://jsonplaceholder.typicode.com/users');
   
   //this is the privious sayntax of the obserable
// obserbledemo.subscribe((partialdata)=>{
//   console.log(partialdata);
// },(err)=>{
//   console.log(err);
// },()=>{
//   console.log('All Data Recived Successfullty')
// })

//this is the new syntax of the angular in oberable
obserbledemo.subscribe({
next:(v)=>console.log(v),
error:(e)=>console.error(e),
complete:()=>console.info('Work Is completed...'),
});
}

}
