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
  employees: Employee[] = [];

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
