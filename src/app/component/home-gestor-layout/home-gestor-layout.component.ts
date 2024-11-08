import { Component } from '@angular/core';
import {GestorCriarTurmaLayoutComponent} from '../gestor-criar-turma-layout/gestor-criar-turma-layout.component';
import {NgIf} from '@angular/common';
import {ProfNotasLayoutComponent} from '../prof-notas-layout/prof-notas-layout.component';

@Component({
  selector: 'app-home-gestor-layout',
  standalone: true,
  imports: [
    GestorCriarTurmaLayoutComponent,
    NgIf,
    ProfNotasLayoutComponent
  ],
  templateUrl: './home-gestor-layout.component.html',
  styleUrl: './home-gestor-layout.component.scss'
})
export class HomeGestorLayoutComponent {

  exibirCriarTurma: boolean = false;

  criarTurma(){
    this.exibirCriarTurma = !this.exibirCriarTurma;
  }

  recarregarDadosPai(): void {
    this.criarTurma();
  }

}
