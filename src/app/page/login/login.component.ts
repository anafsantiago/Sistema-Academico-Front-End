import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../service/login/login.service';
import {Login} from '../../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login: Login = {
    'usuario': '',
    'senha': ''
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  autenticar() {
    console.log(this.login);

    this.loginService.autenticar(this.login).subscribe({
      next: token => {
        console.log('Sucesso.', token);
        localStorage.setItem('authToken', token);
        void this.router.navigate(['/principal']);
      },
      error: error => {
        console.log('Erro:', error.error);
      },
      complete: () => {
        console.log('Autenticação completa.');
      }
    });
  }
}
