import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginService} from '../../service/login/login.service';
import {Login} from '../../model/login';
import {Router} from '@angular/router';
import {LoginLayoutComponent} from '../../component/login-layout/login-layout.component';
import {InputLoginComponent} from '../../component/input-login/input-login.component';
import {NgIf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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

  readonly usuario = new FormControl('', [Validators.required]);
  readonly senha = new FormControl('', [Validators.required]);

  errorMessage = signal('');
  @Input() primaryBtnText = "";

  constructor(private loginService: LoginService, private router: Router) {
    this.login = new FormGroup({
      usuario: this.usuario,
      senha: this.senha
    });

    // Observa mudanças no campo de email e atualiza a mensagem de erro
    this.usuario.valueChanges.subscribe(() => this.updateErrorMessage());
  }

  autenticar() {
    const loginData: Login = {
      usuario: this.usuario.value ?? '', // Se for null, usa uma string vazia
      senha: this.senha.value ?? ''
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
    if (this.usuario.hasError('required')) {
      this.errorMessage.set('Você deve inserir um usuário.');
    } else {
      this.errorMessage.set('');
    }
  }
}
