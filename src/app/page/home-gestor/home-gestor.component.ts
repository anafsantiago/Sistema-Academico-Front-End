import { Component } from '@angular/core';
import {HorarioDataComponent} from '../../component/horario-data/horario-data.component';
import {MinhasUcAlunoComponent} from '../../component/minhas-uc-aluno/minhas-uc-aluno.component';
import {ToolbarComponent} from '../../component/toolbar/toolbar.component';
import {UserOptionsComponent} from '../../component/user-options/user-options.component';
import {HomeGestorLayoutComponent} from '../../component/home-gestor-layout/home-gestor-layout.component';

@Component({
  selector: 'app-home-gestor',
  standalone: true,
  imports: [
    HorarioDataComponent,
    MinhasUcAlunoComponent,
    ToolbarComponent,
    UserOptionsComponent,
    HomeGestorLayoutComponent
  ],
  templateUrl: './home-gestor.component.html',
  styleUrl: './home-gestor.component.scss'
})
export class HomeGestorComponent {

}
