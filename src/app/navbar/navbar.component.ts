import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  myNavLink=[
    { text:'Home', link:'home' },
    { text:"aboutus", link:'aboutus' },
    { text:'career', link:'career'},
    { text:'not-found' , link:'not-found'},
    { text:'products', link:'products'},
    { text:'employees', link:'employees'},
    { text:'addEmployee' , link:'add' },
    { text:'dummyData' , link:'dummyData'},
    { text:'grocery', link:'grocery'},
    { text:'custome', link:'custome'},
    { text:'customers',link:'customers'},
  ];

}
