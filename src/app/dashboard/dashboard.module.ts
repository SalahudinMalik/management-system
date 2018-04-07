import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
//import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NgProgressModule } from 'ngx-progressbar';
@NgModule({
  imports: [CommonModule,NgbModule,
    DashboardRoutingModule,
    NgProgressModule,
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    //SelectionModel,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [ DashboardComponent ],
  providers : [DataService]
})
export class DashboardModule { }
