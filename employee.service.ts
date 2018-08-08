import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';


@Injectable()
export class EmployeeService{
private listEmployees: Employee[] =[
    {
        id:1,
        name:'Employee1',
        gender:'Female',
        email:'Employee1@gmail.com',
        phoneNumber:2233111,
        contactPreference:'Email',
        dateOfBirth:new Date('10/10/1992'),
        department:'IT',
        isActive:true,
        photoPath:'assets/images/blank_profile_female.jpg',
    },
      {
        id:2,
        name:'Employee2',
        gender:'Female',
        email:'Employee2@gmail.com',
        phoneNumber:3653636,
        contactPreference:'PhoneNumber',
        dateOfBirth:new Date('09/11/1992'),
        department:'IT',
        isActive:true,
        photoPath:'assets/images/blank_profile_female.jpg',
    },
      {
        id:3,
        name:'Employee3',
        gender:'Female',
        email:'Employee3@gmail.com',
        phoneNumber:3388833,
        contactPreference:'Email',
        dateOfBirth:new Date('05/02/1992'),
        department:'IT',
        isActive:true,
        photoPath:'assets/images/blank_profile_female.jpg',
      },
      {
        id:4,
        name:'Employee4',
        gender:'Male',
        email:'Employee4@gmail.com',
        phoneNumber:887677,
        contactPreference:'PhoneNumber',
        dateOfBirth:new Date('01/02/1992'),
        department:'IT',
        isActive:true,
        photoPath:'assets/images/default-profile-pic.png',
      },
];

getEmployees(): Employee[]{
    return this.listEmployees;
}

getEmployee(id : number): Employee{
    return this.listEmployees.find(e => e.id === id);
}

save(employee:Employee){
    this.listEmployees.push(employee);
}
}