import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent implements OnInit {
  obj:Task[]=[];
      task:string;
    priority:number;
    startdate:Date;
    enddate:Date;
    obj2:Task;
  list: any;
  constructor(private route:Router) { 
    // this.obj=new Task();
    // this.obj2=new Task();
    // this.obj=[{task:'ade',priority:4,startDate:new Date(1998,3,4),endDate:new Date(1996,5,4)}]
    // sessionStorage.setItem("t1",this.obj2.task);
    // sessionStorage.setItem("t2",Convert(this.obj2.priority))
    // sessionStorage.setItem("t3",Date.parse(this.obj2.startDate))
    // sessionStorage.setItem("t4",this.obj2.endDate)
 

  }
  ngOnInit() {
  }
public Add(){
this.obj2=new Task();
  this.obj2.task=this.task;
  this.obj2.priority=this.priority;
  this.obj2.startdate=this.startdate;
  this.obj2.enddate=this.enddate;
  if(localStorage.getItem("t2")){
    this.obj=JSON.parse(localStorage.getItem("t2"));
  }
  this.obj.push(this.obj2)
  console.log(this.obj2);
  localStorage.setItem('t2',JSON.stringify(this.obj));
}
public reset(){
  localStorage.clear();
  this.route.navigateByUrl('addtask')
}
}
