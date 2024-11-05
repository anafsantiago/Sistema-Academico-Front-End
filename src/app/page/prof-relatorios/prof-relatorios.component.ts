import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {ProfFrequenciaLayoutComponent} from '../../component/prof-frequencia-layout/prof-frequencia-layout.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {ProfRelatoriosLayoutComponent} from '../../component/prof-relatorios-layout/prof-relatorios-layout.component';

@Component({
  selector: 'app-prof-relatorios',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ProfFrequenciaLayoutComponent,
    ToolbarComponent,
    UserOptionsComponent,
    ProfRelatoriosLayoutComponent
  ],
  templateUrl: './prof-relatorios.component.html',
  styleUrl: './prof-relatorios.component.scss'
})
export class ProfRelatoriosComponent {

}
