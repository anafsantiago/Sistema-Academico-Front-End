import { Component } from '@angular/core';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [ToolbarComponent, UserOptionsComponent, HorarioDataComponent],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.scss'
})
export class HomeAlunoComponent {

}
