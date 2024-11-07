import {Component} from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ProfessorLayoutComponent} from '../../component/professor-layout/professor-layout.component';


@Component({
  selector: 'app-home-professor',
  standalone: true,
  imports: [
    HorarioDataComponent,
    MinhasUcAlunoComponent,
    ToolbarComponent,
    UserOptionsComponent,
    ProfessorLayoutComponent
  ],
  templateUrl: './home-professor.component.html',
  styleUrl: './home-professor.component.scss'
})
export class HomeProfessorComponent {

}
