import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators} from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeForm:FormGroup;
submitted:boolean=false;
item:Employee;
items:Employee[]=[];
  constructor(private formbuilder:FormBuilder) { 
    
  }

  ngOnInit() {
    this.employeeForm=this.formbuilder.group({
      eid:['',[Validators.required,Validators.pattern("^[A-Z]{1}[0-9]{4}")]],
      ename:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      jdate:['',[Validators.required]],
      mno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{10}$")]],
      desig:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
    });
  }
 onSubmit(){
   this.submitted=true;
   if(this.employeeForm.valid){
    this.item=new Employee();
     alert("form is valid");
    console.log(JSON.stringify(this.employeeForm.value));
  
     this.item.eid=this.employeeForm.value["eid"];
     this.item.ename=this.employeeForm.value["ename"];
     this.item.jdate=this.employeeForm.value["jdate"];
     this.item.desig=this.employeeForm.value["desig"];
     this.item.mno=this.employeeForm.value["mno"];
     this.item.email=this.employeeForm.value["email"];
     this.item.pwd=this.employeeForm.value["pwd"];
     this.items.push(this.item);
     console.log(this.item);
   }
 }
 get f(){
   return this.employeeForm.controls;
 }
 onReset(){
   this.submitted=false;
   this.employeeForm.reset;
 }
}
