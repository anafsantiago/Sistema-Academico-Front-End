import {Component, Input} from '@angular/core';
import {HorarioDataComponent} from '../horario-data/horario-data.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-aluno-notas-frequencia',
  standalone: true,
  imports: [
    HorarioDataComponent,
    UserOptionsComponent,
    ToolbarComponent,
    NgIf
  ],
  templateUrl: './aluno-notas-frequencia.component.html',
  styleUrl: './aluno-notas-frequencia.component.scss'
})
export class AlunoNotasFrequenciaComponent {
  @Input() fichaIndividual!: FichaIndividualDiscente;
  @Input() nomeUnidadeCurricular!: string;
  @Input() situacaoAlocacao!: string;

/*  getNotaReposicao(): number | string {
    const reposicaoNota = this.fichaIndividual.notas.find(nota => nota.reposicao);
    if (reposicaoNota) {
      return reposicaoNota.valor;
    }
    return 'N/A'
  }*/
}
