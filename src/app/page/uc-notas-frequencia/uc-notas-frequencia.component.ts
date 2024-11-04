import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {
  NotasFrequenciaLayoutComponent
} from '../../component/notas-frequencia-layout/notas-frequencia-layout.component';

@Component({
  selector: 'app-uc-notas-frequencia',
  standalone: true,
  imports: [
    HorarioDataComponent,
    MinhasUcAlunoComponent,
    ToolbarComponent,
    UserOptionsComponent,
    NotasFrequenciaLayoutComponent
  ],
  templateUrl: './uc-notas-frequencia.component.html',
  styleUrl: './uc-notas-frequencia.component.scss'
})
export class UcNotasFrequenciaComponent {

}
