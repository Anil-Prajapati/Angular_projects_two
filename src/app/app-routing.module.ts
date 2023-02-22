import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { ContractsjobComponent } from './contractsjob/contractsjob.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DummyProductComponent } from './dummy-product/dummy-product.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './gurads/auth.guard';
import { CanauthGuard } from './gurads/canauth.guard';
import { HasChangesGuard } from './gurads/has-changes.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PermanentsjobComponent } from './permanentsjob/permanentsjob.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductService } from './services/product.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  //crud operation model and function
  { 
    path: '', redirectTo: 'employee', pathMatch: 'full' 
  },

  { 
    path: 'employees', component: EmployeeListComponent 
  },

  { 
    path: 'add', component: CreateEmployeeComponent ,
    canDeactivate:[HasChangesGuard]
  },

  { 
    path: 'update/:id', component: UpdateEmployeeComponent 
  },

  { 
    path: 'details/:id', component: EmployeeDetailsComponent 
  },

  //routing method example 
  {
     path: '', component: HomeComponent
  },

  { 
    path:'dummyData',component:DummyProductComponent
    ,canActivate:[CanauthGuard]
    ,resolve:{product:ProductService}
  },

  { 
    path:'products',component:ProductListComponent
    ,canActivate:[AuthGuard]
  },

  {
    path:'productsDetail/:id',component:ProductsDetailComponent
  },

  {
    path:'productsDetails',component:ProductsDetailsComponent
  },

  { 
    path: 'aboutus', component: AboutusComponent
  },

  { 
    path: 'career', component: CareerComponent,
    canActivateChild:[CanauthGuard] ,
    
    //this is the chield componenets
    children:[
    { 
      path:'permanents',component:PermanentsjobComponent
    },

    { path:'constracts',component:ContractsjobComponent
    },

    ]},
   
  { 
    path: 'home', component: HomeComponent
  },

  { 
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  { path: 'custome', loadChildren: () => import('./custome/custome.module').then(m => m.CustomeModule) },
  { path:'customers', loadChildren:()=>import('./customers/customers.component').then(m=>m.CustomersComponent)},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
