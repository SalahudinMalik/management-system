import { Component , OnInit, style} from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';


@Component({
  templateUrl: 'dashboard.component.html',
  styles : []
})
export class DashboardComponent implements OnInit {



  constructor( private dataService:DataService
   ) { }

   ngOnInit(){
     
   
   }

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


 
}

