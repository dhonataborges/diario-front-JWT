import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-read',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    user: User = {
    id: '',
    cargo: '',
    password: '',
    email: '',
  }

  
  cargo = new FormControl('', [Validators.minLength(5)])
  email = new FormControl('', [Validators.required, Validators.email])
  password = true;

  constructor(
    private router : Router,
  //  private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  navigateToHome():void {
    this.router.navigate(['home'])
  }

  errorValidCargo() {
    if (this.cargo.invalid) {
      return 'Cargo é obrigatório!';
    }
    return false;
  }

}