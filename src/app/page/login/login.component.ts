import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { LoginLayoutComponent } from '../../component/login-layout/login-layout.component';
import { InputLoginComponent } from '../../component/input-login/input-login.component';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { jwtDecode } from "jwt-decode";
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.login = new FormGroup({
      usuario: this.usuario,
      senha: this.senha
    });

    this.usuario.valueChanges.subscribe(() => this.updateErrorMessage());
  }

  autenticar() {
    const login: Login = {
      usuario: this.usuario.value ?? '',
      senha: this.senha.value ?? ''
    };

    this.loginService.autenticar(login).subscribe({
      next: token => {

        localStorage.setItem('authToken', token);
        const decoded = jwtDecode(token);
        const usuario = decoded.sub;

        this.usuarioService.findUsuarioLogado(usuario).subscribe({
          next: usuarioLogado => {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            if (usuarioLogado.papeis.some(papel => papel.descricao === 'DISCENTE')) {
              this.router.navigate(['/home-aluno']);
            } else if (usuarioLogado.papeis.some(papel => papel.descricao === 'GESTOR')) {
                this.router.navigate(['/home-professor']);
            } else if (usuarioLogado.papeis.some(papel => papel.descricao === 'DOCENTE')) {
              this.router.navigate(['/home-professor']);
            }
          },
          error: error => {
            console.error('Erro ao obter o usuário:', error);
          }
        });

      },
      error: error => {
        console.log('Erro:', error.error);
        this.errorMessage.set('Erro ao autenticar. Verifique suas credenciais.');
        this.snackBar.open('Erro ao autenticar. Verifique seu Usuario e Senha.', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top'
        });
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
