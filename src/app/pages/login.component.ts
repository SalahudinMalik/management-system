
import { Component , OnInit ,Provider} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgProgress } from 'ngx-progressbar';
import {AuthService} from '../auth.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';
import { HttpClientModule ,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit{
   userName = '';
   userPass = '';
   oldUserName = '';
   host = 'NA';
   hits = 0;
  public res ;
  public errorMsg ='';
  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ngProgress : NgProgress
  ) { }
  ngOnInit(){
   
  }
  
  onClick()
  {
    if(this.userName == ''){
      this.toastr.warning('Empty Field ', 'Please enter User Name');
      return;
    }
    if(this.userPass == ''){
      this.toastr.warning('Empty Field ', 'Please enter Password');
      return;
    }
    if(this.oldUserName != this.userName){
      this.hits = 0;

    }
    this.ngProgress.start();
      this.authService.getLogin(this.userName , this.userPass , this.host , this.hits)
        .subscribe(data => {
          this.res = data;
          //console.log("Sub : " +data);
          
         // if(data == '1'){
          if(!this.res.includes("Error")) {
            console.log("Success :" + this.res)
            this.authService.setToken(this.userName); 
            this.ngProgress.done();
            this.toastr.success('Successfully ', 'Login');
            this.router.navigateByUrl("/dashboard");
           
          }
          else {
            this.hits++;
            console.log(this.hits);
            this.oldUserName = this.userName;
            this.ngProgress.done();
            this.toastr.warning(this.res , 'ERROR');
          }
        },
        error =>{
          this.errorMsg = error
          this.ngProgress.done();
          this.toastr.error("Server Error" , this.errorMsg);
        });

          

          // console.log(Response);
          // this.router.navigateByUrl("/pages/dashboard");
      
      // this._employeeService.getEmployees()
      // .subscribe(data => this.employees = data,
      //           error => this.errorMsg = error);
        //console.log("values : " + this.res)
        if(this.res == '1'){
          console.log("Success :" + this.res)

        }
        else {
          console.log("Error data :" + this.res)
        }
      
  }
 
}
