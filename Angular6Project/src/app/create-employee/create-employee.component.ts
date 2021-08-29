import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createEmployeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYear: new FormControl(),
        proficiencey: new FormControl()
      })
    });
  }

  submitCreateEmployeeForm(): void {
    console.log(this.createEmployeeForm.value);
  }
}
