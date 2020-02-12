import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
uname:string
  constructor(private route:Router) { 
    if(sessionStorage.getItem("un"))
    {
this.uname=sessionStorage.getItem("un")
console.log(this.uname)
  }else
  {
    this.route.navigateByUrl('login')
  }
}
  ngOnInit() {
  }
 public logout(){
   sessionStorage.clear();
   this.route.navigate(['Login']);
   //this.route.navigateByUrl('login');
 }
}
