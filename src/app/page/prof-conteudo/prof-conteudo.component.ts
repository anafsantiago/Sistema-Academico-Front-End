import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {ProfessorLayoutComponent} from '../../component/professor-layout/professor-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ProfConteudoLayoutComponent} from '../../component/prof-conteudo-layout/prof-conteudo-layout.component';

@Component({
  selector: 'app-prof-conteudo',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ProfessorLayoutComponent,
    ToolbarComponent,
    UserOptionsComponent,
    ProfConteudoLayoutComponent
  ],
  templateUrl: './prof-conteudo.component.html',
  styleUrl: './prof-conteudo.component.scss'
})
export class ProfConteudoComponent {

}
