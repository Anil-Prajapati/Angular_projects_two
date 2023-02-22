import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { CustomeComponent } from './custome.component';

const routes: Routes = [
  { path: '', component: CustomeComponent },
  { path: 'customer',component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomeRoutingModule { }
