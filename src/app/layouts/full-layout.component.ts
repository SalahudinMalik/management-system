import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styles : [`
  
  `]
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  constructor (private authService:AuthService,
               private router: Router
  ){}

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  logout(){
      this.authService.rmToken();
      this.router.navigateByUrl("/pages");
  }
}
