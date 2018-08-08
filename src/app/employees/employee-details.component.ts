import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
employee:Employee;
private id:number;
  constructor( private _activatedRoute : ActivatedRoute,
              private _employeeService : EmployeeService,
              private _router : Router) { }

  ngOnInit() {
  this._activatedRoute.paramMap.subscribe(params =>{
    this.id = +params.get('id');
    this.employee = this._employeeService.getEmployee(this.id);
  });

    //this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.employee =  this._employeeService.getEmployee(this.id);
  }
  viewNextEmployee(){
    if(this.id < 4) {
    this.id = this.id + 1;
    }
    else{
      this.id = 1 ;
    }
    this._router.navigate(['/employees',this.id]);
  }

}
