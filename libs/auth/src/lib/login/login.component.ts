import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sal-mono-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() login = new EventEmitter<{
    username: string;
    password: string;
  }>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [null],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.login.emit(this.loginForm.value);
  }
}
