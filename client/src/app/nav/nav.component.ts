import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.accountService.loginService(this.model).subscribe(res=>{
      console.log(res);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    console.log('logout 😎');
    this.loggedIn = false;
    this.model = {};
  }

}
