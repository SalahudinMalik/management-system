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
  styles : [`
  .example-container {
    display: flex;
    flex-direction: column;
    max-height: 500px;
    min-width: 300px;
  }
  
  .mat-table {
    overflow: auto;
    max-height: 500px;
  }
  
  .mat-column-select {
    overflow: visible;
  }
  
      .scrollable-menu {
        height: auto;
        max-height: 500px;
        min-height: 200px;
        overflow-x: hidden;
    }
  `]
})
export class DashboardComponent implements OnInit {


  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);




  constructor( private dataService:DataService
   ) { }
  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  sortOrders: any[] = [];
  selectedSortOrder: string = "Select Agent";
  res;
  counter = 0;
   ngOnInit(){
     this.dataService.getAllAgent()
          .subscribe(data => {
           this.res = data;
           data.forEach(eachObj => {
            //console.log("firms check!");
            this.sortOrders[this.counter] =  (eachObj['agentName']);
            this.counter++;
            //eachObj.name = this.firms[data.firmid - 1].name;
          });
           //console.log(data);
          });

    // this.res.forEach(element => {
    //   this.sortOrders.push(element.agnetName);
    // });
    // console.log(this.sortOrders);
   }

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


 
  ChangeSortOrder(newSortOrder: string) { 
    this.selectedSortOrder = newSortOrder;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



