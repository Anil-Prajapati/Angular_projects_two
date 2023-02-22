import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  templateUrl: './subject-demo1.component.html',
  styleUrls: ['./subject-demo1.component.css']
})
export class SubjectDemo1Component implements OnInit{

    constructor(){}

  ngOnInit(): void {
    //this.subjectDemo();
    //this.behaviourSubject();
     // this.replySubjectDemo();
     this.asyncSubjectDemo();
  }

  //subject concepts is the follow by the upcomming data is not going back data
  subjectDemo(){
    const usersPublisher=new Subject();
    usersPublisher.next('Maruti');
    usersPublisher.next('Mahidra');

    const subscribeUser=usersPublisher.subscribe(cars=>{console.log('Subscriber-1',cars)})
    usersPublisher.next('Toyota');

    const subscribeUser1=usersPublisher.subscribe(cars=>{console.log('subscriber-2',cars)})
    usersPublisher.next('Marsadize')
   
  }

  //behavourSubject conscrpts is the taking one prevous data and upcomig data also
  behaviourSubject(){

    const usersPublisher=new BehaviorSubject('Default Subject');
    usersPublisher.next('Maruti');
    usersPublisher.next('Mahidra');

    const subscribeUser=usersPublisher.subscribe(cars=>{console.log('Subscriber-1',cars)})
    usersPublisher.next('Toyota');

    const subscribeUser1=usersPublisher.subscribe(cars=>{console.log('subscriber-2',cars)})
    usersPublisher.next('Marsadize')

  }
   //replySubject is the follow of the all the data is not messing any things 
  replySubjectDemo(){

    const usersPublisher=new ReplaySubject();
    usersPublisher.next('Maruti');
    usersPublisher.next('Mahidra');

    const subscribeUser=usersPublisher.subscribe(cars=>{console.log('Subscriber-1',cars)})
    usersPublisher.next('Toyota');

    const subscribeUser1=usersPublisher.subscribe(cars=>{console.log('subscriber-2',cars)})
    usersPublisher.next('Marsadize')

  }

  //Async We can take the only upcoming data his not taking the privius data
  asyncSubjectDemo(){

    const usersPublisher=new AsyncSubject();
    usersPublisher.next('Maruti');
    usersPublisher.next('Mahidra');

    const subscribeUser=usersPublisher.subscribe(cars=>{console.log('Subscriber-1',cars)})
    usersPublisher.next('Toyota');

    const subscribeUser1=usersPublisher.subscribe(cars=>{console.log('subscriber-2',cars)})
    usersPublisher.next('Marsadize')

    usersPublisher.complete();
  }
}
