import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/service/math.service';

@Component({
  selector: 'app-math-demo2',
  templateUrl: './math-demo2.component.html',
  styleUrls: ['./math-demo2.component.css']
})
export class MathDemo2Component implements OnInit{

  a=14;
  b=24;
  addResult: number=0;

  constructor(private mathObj:MathService){
    //this is the colled dependency injection in angular
  }
  ngOnInit(): void {
this.addResult=this.mathObj.add(this.a,this.b);
console.log(`Addtion ${this.a} & ${this.b} is: ${this.addResult}`)
    //Ans=38
  }

}
