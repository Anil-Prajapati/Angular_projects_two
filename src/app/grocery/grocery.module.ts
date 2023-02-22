import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryComponent } from './grocery.component';


@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    CommonModule,
    GroceryRoutingModule
  ]
})
export class GroceryModule { }
