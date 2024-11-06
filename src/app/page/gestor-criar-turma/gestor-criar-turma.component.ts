import { Component } from '@angular/core';
import {
  GestorCriarTurmaLayoutComponent
} from '../../component/gestor-criar-turma-layout/gestor-criar-turma-layout.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';

@Component({
  selector: 'app-gestor-criar-turma',
  standalone: true,
  imports: [
    GestorCriarTurmaLayoutComponent,
    HorarioDataComponent,
    UserOptionsComponent,
    ToolbarComponent
  ],
  templateUrl: './gestor-criar-turma.component.html',
  styleUrl: './gestor-criar-turma.component.scss'
})
export class GestorCriarTurmaComponent {

}
