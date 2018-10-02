import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyprojserviceService {
  user = [];
  constructor() { }
  registerUser(payload){
    this.user.push({id:payload.id, name:payload.name, email:payload.email, password:payload.password})
    console.log(this.user);
    console.log(payload);
  }
  loginUser(pay){
    console.log(pay);

    this.user.forEach(element =>{
      if(element.email == pay.email && element.password == pay.password){
       console.log(true);
        return true;
      }else{
        console.log(false);
        return false;
      }
    });
  }
}
