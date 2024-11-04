import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {UcConteudoLayoutComponent} from '../../component/uc-conteudo-layout/uc-conteudo-layout.component';

@Component({
  selector: 'app-uc-conteudo',
  standalone: true,
  imports: [
    HorarioDataComponent,
    MinhasUcAlunoComponent,
    ToolbarComponent,
    UserOptionsComponent,
    UcConteudoLayoutComponent
  ],
  templateUrl: './uc-conteudo.component.html',
  styleUrl: './uc-conteudo.component.scss'
})
export class UcConteudoComponent {

}
