import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {ProfConteudoLayoutComponent} from '../../component/prof-conteudo-layout/prof-conteudo-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ProfFrequenciaLayoutComponent} from '../../component/prof-frequencia-layout/prof-frequencia-layout.component';

@Component({
  selector: 'app-prof-frequencia',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ProfConteudoLayoutComponent,
    ToolbarComponent,
    UserOptionsComponent,
    ProfFrequenciaLayoutComponent
  ],
  templateUrl: './prof-frequencia.component.html',
  styleUrl: './prof-frequencia.component.scss'
})
export class ProfFrequenciaComponent {

}
