import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/service/math.service';

@Component({
  selector: 'app-math-demo1',
  templateUrl: './math-demo1.component.html',
  styleUrls: ['./math-demo1.component.css']
})
export class MathDemo1Component implements OnInit{

  a=10;
  b=20;

  addResult:number=0;

  constructor(private mathObj:MathService){
//Dependency Injection
  }
  ngOnInit(): void {
    this.addResult = this.mathObj.add(this.a, this.b);
    console.log(`Addition of ${this.a} & ${this.b} is: ${this.addResult}`);

    //Ans=30
    
  }

}
