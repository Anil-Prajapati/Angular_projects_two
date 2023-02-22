import { Component, OnInit } from '@angular/core';
import * as data from './products_data.json'

@Component({
  selector: 'app-permanentsjob',
  templateUrl: './permanentsjob.component.html',
  styleUrls: ['./permanentsjob.component.css']
})
export class PermanentsjobComponent implements OnInit{

products=(data as any).default;

  ngOnInit(): void {
    
  }

}
