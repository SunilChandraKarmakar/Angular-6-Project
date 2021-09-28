import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  validationMessages: any = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be generate then 2 character.',
      'maxlength': 'Full Name must be less then 10 character.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.'
    },
    'experienceInYears': {
      'required': 'Experience is required.'
    },
    'proficiency': {
      'required': 'Proficiency is required.'
    }
  };

  formErrors: any = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  createEmployeeForm: FormGroup;
  fullNameLength: number = 0;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEmployeeForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this._formBuilder.group({
        skillName: ['', Validators.required],
        experienceInYear: ['', Validators.required],
        proficiencey: ['', Validators.required]
      })
    });
  }

  submitCreateEmployeeForm(): void {
    console.log(this.createEmployeeForm.value);
  }

  onLoadData(): void {
    this.logValidationErrors(this.createEmployeeForm);
    console.log(this.formErrors)
  }

  private formValueChange(): void {
    this.createEmployeeForm.get('fullName')?.valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    })

    this.createEmployeeForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  private patchValue(): void {
    this.createEmployeeForm.patchValue({
      fullName: 'Sunil Chandra Karmakar',
      email: 'sunil_karmakar@ymail.com',
      skills: {
        skillName: 'ASP.NET Core',
        experienceInYear: '2',
        proficiencey: 'intermediate'
      }
    });
  }

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      let abstractControl: AbstractControl = group.get(key)!;      
      if(abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
      else {
        this.formErrors[key] = '';
        if(abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];
          for(const errorKey in abstractControl.errors) {
            if(errorKey) {
              this.formErrors[key] += messages[errorKey];
            }
          }
        }
      }
    });
  }
}
