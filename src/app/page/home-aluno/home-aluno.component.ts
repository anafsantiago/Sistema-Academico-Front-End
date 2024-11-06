import { Component } from '@angular/core';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {UcConteudoLayoutComponent} from '../../component/uc-conteudo-layout/uc-conteudo-layout.component';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [ToolbarComponent, UserOptionsComponent, HorarioDataComponent, MinhasUcAlunoComponent, UcConteudoLayoutComponent],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.scss'
})
export class HomeAlunoComponent {
}
