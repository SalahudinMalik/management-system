import { NgModule } from '@angular/core';

import { AgentComponent } from './agent.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import {DataService} from '../data.service';

//import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { CdkTableModule } from '@angular/cdk/table';
import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    NgProgressModule,
    MatButtonModule,
    NgbModule,
    MatCheckboxModule,
    //SelectionModel,
    //NoopAnimationsModule,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [
    AgentComponent
  ],
  providers : [DataService]
  
})
export class ComponentsModule { }
