import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  forbiddenUserNames = ['vaibhav', 'komal'];

  projectStatus = ['Stable', 'Critical', 'Finished'];
  projectDetailsForm!: FormGroup;

  public get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.projectDetailsForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.forbiddenProjectNameAsync as AsyncValidatorFn),
      'mail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenProjectEmail as AsyncValidatorFn),
      'projectStatus': new FormControl('critical')
    });
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails as AsyncValidatorFn),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    this.signUpForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.signUpForm.statusChanges.subscribe(
      (curStatus) => {
        console.log(curStatus);
      }
    );
    this.signUpForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com',
      },
      'gender': 'male',
      'hobbies': [],
    });
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }

  onSubmit(f: FormGroup) {
    console.log(f.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { forbiddenNameFound: true };
    }
    return null;
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'test') {
      return { forbiddenNameFound: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'vpg1986@gmail.com') {
          resolve({ 'emailIsforbidden': true });
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  forbiddenProjectEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toLowerCase() === 'test') {
          resolve({ forbiddenNameFound: true });
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onResetSignUpForm() {
    // THIS REMOVES THE DEFAULT RADIO BUTTON VALUE AS WELL
    // this.signUpForm.reset();

    // THIS RESET THE FORM WITH THE PROVIDED OBJECT
    this.signUpForm.reset({
      'userData': {
        'username': '',
        'email': '',
      },
      'gender': 'male',
      'hobbies': [],
    });
  }

  onResetProjectDetailsForm() {
    this.projectDetailsForm.reset();
  }

}
