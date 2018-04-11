import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { NgProgressModule } from 'ngx-progressbar';
import { ChartJSComponent } from './chartjs.component';
@NgModule({
  imports: [CommonModule,NgbModule,
    DashboardRoutingModule,
    NgProgressModule,
    ChartsModule,
  ],
  declarations: [ DashboardComponent ,ChartJSComponent],
  providers : [DataService]
})
export class DashboardModule { }
