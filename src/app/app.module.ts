import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"; 

//Material angular

import { CdkTableModule } from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
//Toaster
import { ToastrModule } from 'ngx-toastr';

import { NgProgressModule } from 'ngx-progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Globals } from '../Globals';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import {AuthService} from './auth.service';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component'
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';


@NgModule({
  imports: [
    BrowserModule,
    // MatCheckboxModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
    CommonModule,
    NgProgressModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule.forRoot(),
    ModalModule,
    HttpClientModule,
   // FormsModule,
    //ReactiveFormsModule
    ToastrModule.forRoot()
   
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    SimpleLayoutComponent
  ],
  providers: [
    AuthService,
    Globals,
    AuthGuard,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
