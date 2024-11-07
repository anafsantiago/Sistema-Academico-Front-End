import {Component, Input} from '@angular/core';
import {HorarioDataComponent} from '../horario-data/horario-data.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {UnidadeCurricular} from '../../model/unidadeCurricular';

@Component({
  selector: 'app-uc-conteudo',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ToolbarComponent,
    UserOptionsComponent
  ],
  templateUrl: './uc-conteudo.component.html',
  styleUrl: './uc-conteudo.component.scss'
})
export class UcConteudoComponent {
  @Input() unidadeCurricular!: UnidadeCurricular;
}