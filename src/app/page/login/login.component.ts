import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { LoginLayoutComponent } from '../../component/login-layout/login-layout.component';
import { InputLoginComponent } from '../../component/input-login/input-login.component';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, LoginLayoutComponent, InputLoginComponent, MatFormFieldModule, MatInputModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {

  login: FormGroup;

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required]);

  errorMessage = signal('');
  @Input() primaryBtnText = "";

  constructor(private loginService: LoginService, private router: Router) {
    this.login = new FormGroup({
      email: this.email,
      password: this.password
    });

    // Observa mudanças no campo de email e atualiza a mensagem de erro
    this.email.valueChanges.subscribe(() => this.updateErrorMessage());
  }

  autenticar() {
    const loginData: Login = {
      email: this.email.value ?? '', // Se for null, usa uma string vazia
      password: this.password.value ?? ''
    };

    this.loginService.autenticar(loginData).subscribe({
      next: token => {
        console.log('Sucesso.', token);
        localStorage.setItem('authToken', token);
        void this.router.navigate(['/principal']);
      },
      error: error => {
        console.log('Erro:', error.error);
        this.errorMessage.set('Erro ao autenticar. Verifique suas credenciais.');
      },
      complete: () => {
        console.log('Autenticação completa.');
      }
    });
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Você deve inserir um valor');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email inválido');
    } else {
      this.errorMessage.set('');
    }
  }
}
