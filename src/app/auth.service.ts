import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthService {
  
  fullurl:any = '';
   userID = '';
  constructor(
    private global:Globals ,
    private http: HttpClient
  ) { }
  getLogin(loginname:string,pwd:string , host:string , hits:any):Observable<any>{
    this.fullurl = '';
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + 'auth/login'+'/'+loginname +'/'+pwd +'/'+host +'/'+hits;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
    
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  }
  public logout():void{
    this.fullurl = '';
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + 'auth/logout'+'/'+localStorage.getItem('token');
    // this.fullurl = this.global.weburl + "auth/login";
    
       this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
    
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // let ret:any = true;
    // console.log('token : ' +token + "value : "+ this.userID);
    // if(token == null){
    //   ret = false;
    // }
    return token != null;
    //return token == this.userID;
    //return true;
  }

  setToken(username:string){
    this.userID = username;
    localStorage.setItem('token' , username);
   // console.log('setToken " '+this.userID);
  }
  getToken():any{
    return localStorage.getItem('token');
  }
  rmToken(){
    localStorage.removeItem('token');
    this.logout();
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
