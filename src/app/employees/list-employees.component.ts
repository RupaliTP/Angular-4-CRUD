import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private selectedEmployeeId: number;
  employees: Employee[] = [
    //   {
    //     id:'1',
    //     name:'Rupali Tidke',
    //     gender:'Female',
    //     email:'rupali@gmail.com',
    //     phoneNumber:2233111,
    //     contactPreference:'Email',
    //     dateOfBirth:new Date('10/10/1992'),
    //     department:'IT',
    //     isActive:true,
    //     photoPath:'assets/images/blank_profile_female.jpg',
    // },
    //   {
    //     id:'2',
    //     name:'Surbhi Takzare',
    //     gender:'Female',
    //     email:'surbhi@gmail.com',
    //     phoneNumber:3653636,
    //     contactPreference:'PhoneNumber',
    //     dateOfBirth:new Date('09/11/1992'),
    //     department:'IT',
    //     isActive:true,
    //     photoPath:'assets/images/blank_profile_female.jpg',
    // },
    //   {
    //     id:'3',
    //     name:'Rohan Kulkarni',
    //     gender:'Male',
    //     email:'rohan@gmail.com',
    //     phoneNumber:3388833,
    //     contactPreference:'Email',
    //     dateOfBirth:new Date('05/02/1992'),
    //     department:'IT',
    //     isActive:true,
    //     photoPath:'assets/images/default-profile-pic.png',
    //   },
    //   {
    //     id:'4',
    //     name:'Rohit Chauhan',
    //     gender:'Male',
    //     email:'rohit@gmail.com',
    //     phoneNumber:887677,
    //     contactPreference:'PhoneNumber',
    //     dateOfBirth:new Date('01/02/1992'),
    //     department:'IT',
    //     isActive:true,
    //     photoPath:'assets/images/default-profile-pic.png',
    //   },
  ];

  constructor(private _employeeService: EmployeeService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // get optional route parameter
    this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id');
  }

  onClick(employeeID: number) {
    this._route.navigate(['/employees', employeeID]);
  }

}
