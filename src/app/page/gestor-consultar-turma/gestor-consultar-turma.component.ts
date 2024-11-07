import { Component } from '@angular/core';
import {
  GestorVisualizarRelatorioProfLayoutComponent
} from '../../component/gestor-visualizar-relatorio-prof-layout/gestor-visualizar-relatorio-prof-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {
  GestorConsultarTurmaLayoutComponent
} from '../../component/gestor-consultar-turma-layout/gestor-consultar-turma-layout.component';

@Component({
  selector: 'app-gestor-consultar-turma',
  standalone: true,
  imports: [
    GestorVisualizarRelatorioProfLayoutComponent,
    ToolbarComponent,
    GestorConsultarTurmaLayoutComponent
  ],
  templateUrl: './gestor-consultar-turma.component.html',
  styleUrl: './gestor-consultar-turma.component.scss'
})
export class GestorConsultarTurmaComponent {

}
