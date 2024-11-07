import { Component } from '@angular/core';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';

@Component({
  selector: 'app-gerenciar-alocacoes-alunos',
  standalone: true,
  imports: [
    ToolbarComponent,
    UserOptionsComponent,
    HorarioDataComponent
  ],
  templateUrl: './gerenciar-alocacoes-alunos.component.html',
  styleUrl: './gerenciar-alocacoes-alunos.component.scss'
})
export class GerenciarAlocacoesAlunosComponent {

}
