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
import {Agent} from '../models/agent.model';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']

})
export class AgentComponent implements OnInit {
  
  agentsList: Agent[] = [];
  plotdata: Plot[] = [];
  selectedAgent: string = "Select Agent";
  selectedAgentCode: any = '';
  res;
  dataToSave: any;
  counter = 0;
  //public agents:any ;
  errorMsg:any;
  // code: string;
  // plotNumber: string;
  // netSize: string;
  // sectorName: string;
  // schemeName: string;
  dataSource = new PlotDataSource(this.dataService);
  displayedColumns = ['select', 'code', 'plotNumber', 'netSize', 'sectorName' , 'schemeName'];
  //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Plot>(true, [] ,true);
  //selection = new SelectionModel<Element>(true, []);


  constructor(
    private dataService:DataService,
    private toastr: ToastrService,
    private ngProgress : NgProgress
  ) { }

  ngOnInit() {
    this.ngProgress.start();
   // this.dataSource.connect().subscribe(data => this.plotdata = data);
    this.dataService.getAllAgent()
      .subscribe(data => {
       // this.res = data;
       this.agentsList = data;
        //console.log('Data : ' + this.agentsList[1].agentName);
        // data.forEach(eachObj => {
        //   //console.log("firms check!");
        //   this.agentsList[this.counter] =  (eachObj['agentName']);
        //   //console.log('agent : ' + this.agents[this.counter]);
        //   this.counter++;
        //   //eachObj.name = this.firms[data.firmid - 1].name;
        // });

        this.ngProgress.done();
      //console.log(data);
      });
    

    
  }
 

 
  ChangeAgent(newAgent: Agent) { 
    this.selectedAgent = newAgent.agentName;
    this.selectedAgentCode = newAgent.code;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.connect.length
   return numSelected === numRows;
  }
  saveData(){
    if(this.selectedAgentCode == '' ){
      this.toastr.warning('Please select an agent first. ');
      return;
    }
    if(this.selection.selected.length <= 0){
      this.toastr.warning('Please select al least a plot first. ');
      return;
    }
    this.selection.selected.forEach(row => console.log('plots ' +row.code));
    console.log('Selected Agent' + this.selectedAgent + 'Code : ' + this.selectedAgentCode);
    //let obj = JSON.parse(this.dataToSave);
    //obj['agent'].push(this.selectedAgentCode);
    //this.selection.selected.forEach(row => console.log('plots ' +row.code));
   // obj['plots'].push(this.selection.selected);
    //console.log('obj : '+obj[0]);
    let agent;
    let plots:any[] = [];
    agent = this.selectedAgentCode;
    this.counter = 0;
   
    this.selection.selected.forEach(row =>{
       plots[this.counter] = row.code;
       this.counter++;
      });
    //plots = this.selection.selected;
    this.dataToSave = JSON.stringify({agent ,plots});
    console.log(this.dataToSave);

    //Service 

    this.dataService.saveData(this.dataToSave)
      .subscribe(
        data1 => {
          let val = data1.substring(0,5);
          if(val ==  'Error')
          {
            this.toastr.error('Error.');
          }
          else{
            this.toastr.success('Data inserted successfully.');
          // this.showToast('success','Success','Data Updated');
            //this.validateButtons();
          }
        }
      );

  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
   // this.isAllSelected() ?
       // this.selection.clear() : 
        //this.dataSource.connect().forEach(row => this.selection.select(row));
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


// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
