import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomeRoutingModule } from './custome-routing.module';
import { CustomeComponent } from './custome.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    CustomeComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomeRoutingModule
  ]
})
export class CustomeModule { }
