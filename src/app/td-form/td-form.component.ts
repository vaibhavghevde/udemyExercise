import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConsoleService } from '../console/console.service';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css'],
})
export class TdFormComponent implements OnInit {
  @ViewChild('f') myForm!: NgForm;
  @ViewChild('f1') myForm1!: NgForm;
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  assignment = {
    email: '',
    subscription: '',
    password: '',
  };

  submitted = false;
  submitted1 = false;

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next('tdform component activated');
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.myForm);
    this.submitted = true;
    this.user.userName = this.myForm.value.userData.username;
    this.user.mail = this.myForm.value.userData.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;

    // use resetForm() instead of reset()
    // when using reset() the form groups still show the required error messages
    this.myForm.resetForm({
      secret: 'pet',
    });
  }

  suggestUserName() {
    const suggestedName = 'SuperUser';
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    this.myForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit1() {
    console.log(this.myForm1);
    this.submitted1 = true;
    this.assignment.email = this.myForm1.value.email;
    this.assignment.subscription = this.myForm1.value.subscription;
    this.assignment.password = this.myForm1.value.password;

    // use resetForm() instead of reset()
    // when using reset() the form groups still show the required error messages
    this.myForm1.resetForm({
      subscription: 'Advanced',
    });
  }

  Reset() {
    this.myForm.resetForm({
      secret: 'pet',
    });
    this.submitted = false;
  }

  Reset1() {
    this.myForm1.resetForm({
      subscription: 'Advanced',
    });
    this.submitted1 = false;
  }
}
