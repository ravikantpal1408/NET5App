import { AccountService } from './../_services/account.service';
import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { User } from '../_models/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromRegisterComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  currentUser$: Observable<User>;


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(res=> {
      console.log(res);
      this.cancel();
    }, error=> {
      console.error(error);
    });
  }

  cancel() {
    console.log('cancelled');
    this.model = {};
    this.cancelRegister.emit(false);
  }

}
