import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {ProfConteudoLayoutComponent} from '../../component/prof-conteudo-layout/prof-conteudo-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ProfNotasLayoutComponent} from '../../component/prof-notas-layout/prof-notas-layout.component';

@Component({
  selector: 'app-prof-notas',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ProfConteudoLayoutComponent,
    ToolbarComponent,
    UserOptionsComponent,
    ProfNotasLayoutComponent
  ],
  templateUrl: './prof-notas.component.html',
  styleUrl: './prof-notas.component.scss'
})
export class ProfNotasComponent {

}
