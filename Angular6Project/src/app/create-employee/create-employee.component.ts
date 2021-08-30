import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEmployeeForm = this._formBuilder.group({
      fullName: [''],
      email: [''],
      skills: this._formBuilder.group({
        skillName: [''],
        experienceInYear: [''],
        proficiencey: ['beginner']
      })
    });
  }

  submitCreateEmployeeForm(): void {
    console.log(this.createEmployeeForm.value);
  }

  onLoadData(): void {
    this.createEmployeeForm.patchValue({
      fullName: 'Sunil Chandra Karmakar',
      email: 'sunil_karmakar@ymail.com',
      skills: {
        skillName: 'ASP.NET Core',
        proficiencey: 'intermediate'
      }
    })
  }
}
