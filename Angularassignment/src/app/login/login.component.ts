import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;

  constructor( private route:Router) {

   }

  ngOnInit() {
  }
public validate(){
  console.log("abc")
  if(this.uname=="Jack"&&this.pwd=="12345"){
    console.log("cde")
    sessionStorage.setItem("un",this.uname);
    this.route.navigateByUrl('buyer');
  }
  if(this.uname=="james"&&this.pwd=="1234"){
    sessionStorage.setItem("un",this.uname);
    this.route.navigateByUrl('seller');
  }
  if(this.uname=="steves"&&this.pwd=="123"){
    sessionStorage.setItem("un",this.uname);
    this.route.navigateByUrl('admin');
  }
}
}

