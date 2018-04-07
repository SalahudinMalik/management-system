import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import {Plot} from './models/plot.model';
import {Agent} from './models/agent.model';

@Injectable()
export class DataService {

  fullurl:any = '';
  res:any;
  dataObj:any;
 
  constructor(
    private global:Globals ,
    private http: HttpClient

  ) { }
  //(res) => this.extractData(res)
  getAllAgent():Observable<Agent[]>{
    this.fullurl = this.global.weburl + 'agent/getAgent' ;
    // this.fullurl = this.global.weburl + "auth/login";
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }

  saveData(data:any): Observable<any> {
    //const usrid : String= localStorage.getItem('usrid');
    
    //const options = {headers,  responseType: 'text' as 'text'};
    this.fullurl = this.global.weburl + 'plotD/saveAP';
    let headers = new Headers({'Content-Type': 'application/json'});
    //const options = new RequestOptions({ headers: headers });
    const params = new URLSearchParams()
    //let headers = new Headers({'Content-Type': 'application/json'});
    this.dataObj = JSON.stringify({data});

      this.res = this.http.post(`${this.fullurl}/`,this.dataObj )
          .map((result: Response) => result.json())
          .catch(this.errorHandler);
    return this.res;
  }


  getAllPlots():Observable<Plot[]>{
    this.fullurl = this.global.weburl + 'plotD/plots' ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
        .map((res : Response) => res)
        .catch(this.errorHandler);
     
  }
    
//   private extractData(res: Response) {
//     if (res.status < 200 || res.status >= 300) {
//           throw new Error('Bad response status: ' + res.status);
//         }
//     let body = res.json();
//     return body || { };
//  }
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
