import { Component } from '@angular/core';
import {
  GestorCriarTurmaLayoutComponent
} from '../../component/gestor-criar-turma-layout/gestor-criar-turma-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {
  GestorVisualizarRelatorioProfLayoutComponent
} from '../../component/gestor-visualizar-relatorio-prof-layout/gestor-visualizar-relatorio-prof-layout.component';

@Component({
  selector: 'app-gestor-visualizar-relatorio-prof',
  standalone: true,
  imports: [
    GestorCriarTurmaLayoutComponent,
    ToolbarComponent,
    GestorVisualizarRelatorioProfLayoutComponent
  ],
  templateUrl: './gestor-visualizar-relatorio-prof.component.html',
  styleUrl: './gestor-visualizar-relatorio-prof.component.scss'
})
export class GestorVisualizarRelatorioProfComponent {

}
