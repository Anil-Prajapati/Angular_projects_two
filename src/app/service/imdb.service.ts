import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  company=[
    {companyName:'Extio Technology',experiance:'One Year'},
    {companyName:'TCS',experiance:'9 Months'},
    {companyName:'Imfosis',experiance:'Ten Year'},
  ]
  constructor() { }

  //get All the company details 
  getAllCompany(){
    return this.company;
  }
}
