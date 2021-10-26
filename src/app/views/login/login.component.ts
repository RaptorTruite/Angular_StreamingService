import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm(form: NgForm): void{
    if(form.valid){
      if(this.authService.login(this.email, this.password)){
        this.router.navigateByUrl('series');
      }
      else this.router.navigateByUrl('')
    }
  }

}
