import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../model/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../model/employee.model';
import {  EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 //isActive = 'true';

 previewPhoto = false;

 datePickerConfig:Partial<BsDatepickerConfig>;

employee: Employee=
{
  id:null,
  name:null,
  gender:null,
  email:'',
  phoneNumber:null,
  contactPreference:null,
  dateOfBirth:null,
  department:null,
  isActive:null,
  photoPath:null,
}

departments : Department[] =
[
  {id:1, name:'IT'},
  {id:2, name:'HR'},
  {id:3, name:'Finance'},
  {id:3, name:'Admin'},
];

constructor(private _employeeService : EmployeeService,
            private _router : Router) {
  this.datePickerConfig = Object.assign(
    {}, {containerClass : 'theme-dark-blue',showWeekNumbers : false, dateInputFormat:'DD/MM/YYYY'}
  );
 }

 togglePhotoPreview(){
   this.previewPhoto = !this.previewPhoto;
 }

  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
