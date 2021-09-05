import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  fullNameLength: number = 0;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEmployeeForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this._formBuilder.group({
        skillName: [''],
        experienceInYear: [''],
        proficiencey: ['beginner']
      })
    });

    this.createEmployeeForm.get('fullName')?.valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    })

    this.createEmployeeForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
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
