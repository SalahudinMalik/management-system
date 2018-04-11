import { Component , OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
@Component({
  selector : 'charts',
  templateUrl: 'chartjs.component.html',
  styles : [`
    
  `]
})
export class ChartJSComponent implements OnInit{

  // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Cash InFlow'},
  // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Cash OutFlow'}
  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Actual InFlow'},
    {data: [], label: 'Expected InFlow'}
  ];
  //public lineChartData:Array<any> = new Array(1);
  //public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public linelabel: any; 
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public datachart:any;
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  
  
  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';
 constructor(
   private dataService:DataService
 ){
 
 }
 ngOnInit(){
  this.onload();
 }
 public onload(){
  let inflow = [];
  let outflow = [];
  let counter = 0;
  this.dataService.getLineChart()
     .subscribe(data1 =>{
      
       data1.forEach(element => {
         this.lineChartLabels.push(element.month);
         inflow[counter] = element.cashInFlow;
         outflow[counter] = element.cashOutFlow;
         counter++;
         this.lineChartData[0].data.push(parseInt(element.cashInFlow));
         this.lineChartData[1].data.push(parseInt(element.cashOutFlow));
         
      });
      this.datachart = this.lineChartData;
      this.linelabel = this.lineChartLabels;
     
     });
 }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
