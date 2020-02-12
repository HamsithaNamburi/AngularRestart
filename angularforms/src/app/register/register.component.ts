import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerFrom:FormGroup;
submitted:boolean=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.registerFrom=this.formbuilder.group({
      title:['',Validators.required],
     firstName:['',[Validators.required,Validators.pattern('^[a-z]{4,5}$')]],
     lastName:['',Validators.required],
     mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(6)]],
     acceptTerms:[false,Validators.requiredTrue]
    });
  }
get f(){
return this.registerFrom.controls;
}
onSubmit(){
  this.submitted=true;
  if(this.registerFrom.valid){
    alert('Success');
    console.log(JSON.stringify(this.registerFrom.value));
  }
}
onReset(){
  this.submitted=false;
  this.registerFrom.reset();
}
}
