import {Component} from '@angular/core';
import {GestorCriarTurmaLayoutComponent} from '../gestor-criar-turma-layout/gestor-criar-turma-layout.component';
import {NgIf} from '@angular/common';
import {ProfNotasLayoutComponent} from '../prof-notas-layout/prof-notas-layout.component';
import {GerenciarAlocacoesAlunosComponent} from '../gerenciar-alocacoes-alunos/gerenciar-alocacoes-alunos.component';

@Component({
  selector: 'app-home-gestor-layout',
  standalone: true,
  imports: [
    GestorCriarTurmaLayoutComponent,
    NgIf,
    ProfNotasLayoutComponent,
    GerenciarAlocacoesAlunosComponent
  ],
  templateUrl: './home-gestor-layout.component.html',
  styleUrl: './home-gestor-layout.component.scss'
})
export class HomeGestorLayoutComponent {
  exibirCriarTurma: boolean = false;
  exibirAlocar: boolean = false;

  criarTurma(): void {
    this.exibirCriarTurma = !this.exibirCriarTurma;
    this.exibirAlocar = false;
  }

  alocar(): void {
    this.exibirAlocar = !this.exibirAlocar;
    this.exibirCriarTurma = false;
  }

  recarregarDadosCriarTurma(): void {
    this.criarTurma();
  }

  recarregarDadosAlocacao(): void {
    this.alocar();
  }

}
