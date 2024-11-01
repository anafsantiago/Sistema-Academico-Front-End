import { Component } from '@angular/core';
import {RedefinirSenhaLayoutComponent} from '../../component/redefinir-senha-layout/redefinir-senha-layout.component';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-redefinir-senha',
  standalone: true,
  imports: [RedefinirSenhaLayoutComponent, MatError, MatFormField, MatInput, MatLabel, NgIf, ReactiveFormsModule],
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.scss'
})
export class RedefinirSenhaComponent {

}
