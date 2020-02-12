import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  obj:Task[]=[];
  task:string;
  priority:number;
  startdate:Date;
  enddate:Date;
  constructor(private route:Router) { 
    if(localStorage.getItem("t2")){
    this.obj=JSON.parse(localStorage.getItem("t2"))
    }
  }

  ngOnInit() {
  }
  public reset(){
    localStorage.clear();
    this.route.navigateByUrl('addtask')
  }
}
