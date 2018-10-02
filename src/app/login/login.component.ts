import { Component, OnInit } from '@angular/core';
import { MyprojserviceService } from '../myprojservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={};
  constructor(public allService: MyprojserviceService) { }

  ngOnInit() {

  }
  onCli(payload){
    
    this.allService.loginUser(this.user);
  }

}
