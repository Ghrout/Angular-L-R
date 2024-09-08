import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {} // Inyecta Router

  ngOnInit(): void {
    // Initialization logic here
  }

  save(): void {
    this.register();
  }

  register(): void {
    if (this.isFormValid()) {
      const bodyData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };

      this.http.post('http://localhost:9002/user/create', bodyData).subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          alert('¡Registrado Correctamente!');
          this.router.navigate(['/login']); // Redirigir al login
        },
        error: (err) => {
          console.error('Error en el registro:', err);
          alert('Hubo un error al registrarse. Por favor, inténtelo de nuevo.');
        },
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  isFormValid(): boolean {
    return !!(this.firstname && this.lastname && this.email && this.password);
  }
}
