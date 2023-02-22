import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, skip } from 'rxjs';

@Component({
  selector: 'app-obserbaledemo2',
  templateUrl: './obserbaledemo2.component.html',
  styleUrls: ['./obserbaledemo2.component.css']
})
export class Obserbaledemo2Component implements OnInit{

  naturalWords:any
  naturalWords_upt5:any
  constructor(){}

  ngOnInit(): void {

    // const publisher1=new Observable((publisher)=>{
    //   publisher.next([10,20,30]);
    //   publisher.next([40,50,60]);
    //   publisher.next([70,80,90])

    //   publisher.complete();
    // });
    this.demo();
    this.OfDemo();
    this.intervalDemo()
  
  }

  demo(){
const cars=['Honda','maruti','mahindra','toyta']
const carpublisher=from(cars);
carpublisher.subscribe((val)=>{
  console.log(val);
},(err)=>{
  console.log(err);
},()=>{
  console.log('this is the completed....')
})
  }

  
  OfDemo(){
const natuarlNUmber=[10,20,30,40,50,60,70,80,90,100];
const numbers=of(natuarlNUmber);
numbers.subscribe((val)=>{
  console.log(val);
})
  }

 //this method will be skip 5 words
  intervalDemo(){
    this.naturalWords = interval(100);
    this.naturalWords_upt5=this.naturalWords.pipe(skip(5));
    this.naturalWords.subscribe((val:any)=>{
       // console.log(val);
    })
  }
  

}
