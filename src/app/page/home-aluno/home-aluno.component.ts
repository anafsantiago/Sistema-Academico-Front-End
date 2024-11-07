import {Component, Input} from '@angular/core';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {NgIf} from '@angular/common';
import {UcConteudoComponent} from '../../component/uc-conteudo/uc-conteudo.component';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [ToolbarComponent, UserOptionsComponent, HorarioDataComponent, MinhasUcAlunoComponent, NgIf, UcConteudoComponent],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.scss'
})
export class HomeAlunoComponent {
}
