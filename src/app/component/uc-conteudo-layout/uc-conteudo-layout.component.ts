import { Component } from '@angular/core';
import {HorarioDataComponent} from '../horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../minhas-uc-aluno/minhas-uc-aluno.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {UserOptionsComponent} from '../user-options/user-options.component';

@Component({
  selector: 'app-uc-conteudo-layout',
  standalone: true,
  imports: [
    HorarioDataComponent,
    MinhasUcAlunoComponent,
    ToolbarComponent,
    UserOptionsComponent
  ],
  templateUrl: './uc-conteudo-layout.component.html',
  styleUrl: './uc-conteudo-layout.component.scss'
})
export class UcConteudoLayoutComponent {

}
