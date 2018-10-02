import { Component, OnInit } from '@angular/core';
import { MyprojserviceService } from '../myprojservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user= {};
  constructor(public allService: MyprojserviceService) { 
  
  }

  ngOnInit() {

  }

  onClick(){
    this.allService.registerUser(this.user)
    
  }
}
