import { Component } from '@angular/core';
import {
  GestorCriarTurmaLayoutComponent
} from '../../component/gestor-criar-turma-layout/gestor-criar-turma-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {
  GestorVisualizarRelatorioAlunoLayoutComponent
} from '../../component/gestor-visualizar-relatorio-aluno-layout/gestor-visualizar-relatorio-aluno-layout.component';

@Component({
  selector: 'app-gestor-visualizar-relatorio-aluno',
  standalone: true,
  imports: [
    GestorCriarTurmaLayoutComponent,
    ToolbarComponent,
    GestorVisualizarRelatorioAlunoLayoutComponent
  ],
  templateUrl: './gestor-visualizar-relatorio-aluno.component.html',
  styleUrl: './gestor-visualizar-relatorio-aluno.component.scss'
})
export class GestorVisualizarRelatorioAlunoComponent {

}
