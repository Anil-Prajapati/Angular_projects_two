import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponetentComponent } from './parent-componetent/parent-componetent.component';
import { ChiledOneComponent } from './chiled-one/chiled-one.component';
import { ChiledTwoComponent } from './chiled-two/chiled-two.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MathDemo1Component } from './math-demo1/math-demo1.component';
import { MathDemo2Component } from './math-demo2/math-demo2.component';
import { HttpClientModule } from '@angular/common/http';
import { Obserbaledemo1Component } from './obserbaledemo1/obserbaledemo1.component';
import { Obserbaledemo2Component } from './obserbaledemo2/obserbaledemo2.component';
import { Obserbaledemo3Component } from './obserbaledemo3/obserbaledemo3.component';
import { Obserbaledemo4Component } from './obserbaledemo4/obserbaledemo4.component';
import { SubjectDemo1Component } from './subject-demo1/subject-demo1.component';
import { FormDemo1Component } from './form-demo1/form-demo1.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormTemplateDemoComponent } from './form-template-demo/form-template-demo.component';
import { FormDrivenDemoComponent } from './form-driven-demo/form-driven-demo.component';
import { FormDyanmicDemoComponent } from './form-dyanmic-demo/form-dyanmic-demo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PermanentsjobComponent } from './permanentsjob/permanentsjob.component';
import { ContractsjobComponent } from './contractsjob/contractsjob.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { DummyProductComponent } from './dummy-product/dummy-product.component';
import { MargeImagesComponent } from './marge-images/marge-images.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponetentComponent,
    ChiledOneComponent,
    ChiledTwoComponent,
    MathDemo1Component,
    MathDemo2Component,
    Obserbaledemo1Component,
    Obserbaledemo2Component,
    Obserbaledemo3Component,
    Obserbaledemo4Component,
    SubjectDemo1Component,
    FormDemo1Component,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    FormTemplateDemoComponent,
    FormDrivenDemoComponent,
    FormDyanmicDemoComponent,
    ProductListComponent,
    HomeComponent,
    AboutusComponent,
    CareerComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    PermanentsjobComponent,
    ContractsjobComponent,
    ProductsDetailsComponent,
    ProductsDetailComponent,
    DummyProductComponent,
    MargeImagesComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
