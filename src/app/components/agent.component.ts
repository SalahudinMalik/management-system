import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgProgress } from 'ngx-progressbar';
import {AuthService} from '../auth.service';
import {DataService} from '../data.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';
import {ContentChildren, QueryList} from "@angular/core";
import {DataSource} from '@angular/cdk/collections';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { Observable } from 'rxjs/Observable';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {Plot} from '../models/plot.model';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']

})
export class AgentComponent implements OnInit {
  
  sortOrders: any[] = [];
  plotdata: Plot[] = [];
  selectedSortOrder: string = "Select Agent";
  res;
  counter = 0;
  public agents:any ;
  errorMsg:any;
  // code: string;
  // plotNumber: string;
  // netSize: string;
  // sectorName: string;
  // schemeName: string;
  dataSource = new PlotDataSource(this.dataService);
  displayedColumns = ['select', 'code', 'plotNumber', 'netSize', 'sectorName' , 'schemeName'];
  //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Plot>(true, []);



  constructor(
    private dataService:DataService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

   // this.dataSource.connect().subscribe(data => this.plotdata = data);
    this.dataService.getAllAgent()
      .subscribe(data => {
       // this.res = data;
        console.log('Data : ' + data);
        data.forEach(eachObj => {
          //console.log("firms check!");
          this.sortOrders[this.counter] =  (eachObj['agentName']);
          //console.log('agent : ' + this.sortOrders[this.counter]);
          this.counter++;
          //eachObj.name = this.firms[data.firmid - 1].name;
        });
      //console.log(data);
      });
    

    
  }
 

 
  ChangeSortOrder(newSortOrder: string) { 
    this.selectedSortOrder = newSortOrder;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.connect.length
   return numSelected === numRows;
  }
  saveData(){
    console.log('Select Plot '+this.selection.selected[0].code);
    console.log('Selected Agent' + this.selectedSortOrder);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
  // this.isAllSelected() ?
       //this.selection.clear() :
      // this.dataSource.connect.forEach(row => this.selection.select(row));
       //this.plotdata.forEach(row => this.selection.select(row));
        
  }


}
export class PlotDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Plot[]> {
    return this.dataService.getAllPlots();
  }
  disconnect() {}
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
