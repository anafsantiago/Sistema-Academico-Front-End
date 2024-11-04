import { Component } from '@angular/core';
import {
  NotasFrequenciaLayoutComponent
} from '../../component/notas-frequencia-layout/notas-frequencia-layout.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';

@Component({
  selector: 'app-aluno-notas-frequencia',
  standalone: true,
  imports: [
    NotasFrequenciaLayoutComponent,
    HorarioDataComponent,
    UserOptionsComponent,
    ToolbarComponent
  ],
  templateUrl: './aluno-notas-frequencia.component.html',
  styleUrl: './aluno-notas-frequencia.component.scss'
})
export class AlunoNotasFrequenciaComponent {

}
