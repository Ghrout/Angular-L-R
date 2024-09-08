import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:9002/user/login', bodyData).subscribe(
      (resultData: any) => {
        console.log('Response:', resultData);
        if (resultData && resultData.status) {
          this.router.navigateByUrl('/home');
        } else {
          alert('Incorrect Email or Password');
        }
      },
      (error) => {
        console.log('Error login', error);
      }
    );    
  }
}
