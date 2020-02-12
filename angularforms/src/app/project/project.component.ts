import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
projectFrom:FormGroup;
submitted:boolean=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.projectFrom=this.formbuilder.group({
      pid:['',Validators.required],
      pname:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.projectFrom.invalid){
      return;
    }else{
      alert("Form is validate");
      console.log(this.projectFrom.value);
      console.log(JSON.stringify(this.projectFrom.value));
      console.log(this.projectFrom.value["pid"]);
      console.log(this.projectFrom.value["pname"])
    }
  }
  get f(){ return this.projectFrom.controls;}
onReset(){
  this.submitted=false;
  this.projectFrom.reset;
}
}
