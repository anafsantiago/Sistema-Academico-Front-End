import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {DecimalPipe, UpperCasePipe} from '@angular/common';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {FichaIndividualService} from '../../service/ficha-individual/ficha-individual.service';
import {AlocacaoDocente} from '../../model/alocacaoDocente';
import {TurmaUnidadeCurricularService} from '../../service/turma-unidade-curricular/turma-unidade-curricular.service';

@Component({
  selector: 'app-prof-notas-layout',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    UpperCasePipe,
    MatHeaderCellDef,
    FormsModule,
    MatFormField,
    MatInput,
    DecimalPipe
  ],
  templateUrl: './prof-notas-layout.component.html',
  styleUrl: './prof-notas-layout.component.scss'
})
export class ProfNotasLayoutComponent implements OnChanges {
  @Output() atualizarPai = new EventEmitter<void>();
  @Input() alocacoesDocente: AlocacaoDocente[] = [];
  @Input() alocacoesDiscente: Map<number, AlocacaoDiscente[]> = new Map();
  @Input() turmaUnidade!: TurmaUnidadeCurricular;

  constructor(private fichaIndividualService: FichaIndividualService,
              private turmaUnidadeService: TurmaUnidadeCurricularService,) {
  }

  colunas: string[] = [
    'discente', 'unidade1', 'unidade2', 'unidade3', 'reposicao', 'faltas'];
  dataSource = new MatTableDataSource<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['turmaUnidade'] && this.turmaUnidade
    ) {
      const idTurma = this.turmaUnidade.id;
      const alocacoesParaTurma = this.alocacoesDiscente.get(idTurma) || [];
      this.dataSource.data = alocacoesParaTurma;
      console.log(this.dataSource.data);
    }
  }

  /*  getNotaReposicao(alocacao: AlocacaoDiscente): number | string {
      const reposicaoNota = alocacao.fichaIndividualAlocacaoDiscente.notas.find(nota => nota.reposicao);
      return reposicaoNota ? reposicaoNota.valor : 'N/A';
    }

    onReposicaoChange(event: any, alocacao: AlocacaoDiscente): void {
      const reposicaoNota = alocacao.fichaIndividualAlocacaoDiscente.notas.find(nota => nota.reposicao);
      if (reposicaoNota) {
        reposicaoNota.valor = event.target.value;
      }
    }*/

  salvarNotasFrequencias(): void {
    const fichas: FichaIndividualDiscente[] = [];

    const fichasArray = Array.from(this.dataSource.data);

    fichasArray.forEach((alocacao: AlocacaoDiscente) => {
      const ficha = alocacao.fichaIndividualAlocacaoDiscente;
      fichas.push(ficha);
    });

    this.fichaIndividualService.gravarNotasFrequencias(fichas).subscribe({
      next: (response) => {
        console.log('Notas e frequências salvas com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao salvar notas e frequências', error);
      },
      complete: () => {
        console.log('Processo de gravação completo');
        this.atualizarPai.emit();
      }
    });
  }

  consolidarTurma(): void {
    const idTurma = this.turmaUnidade.id;

    this.turmaUnidadeService.consolidarTurma(idTurma).subscribe({
      next: (response) => {
        console.log('Turma consolidada com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao consolidar turma', error);
      },
      complete: () => {
        console.log('Processo de consolidação completo');
        this.atualizarPai.emit();
      }
    });
  }

  validateInput(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    if (value.startsWith('0') && !value.includes('.')) {
      value = '0.' + value.slice(1);
    }
    if (parseFloat(value) > 10) {
      value = (parseFloat(value) / 10).toFixed(1);
    }
    if (parseFloat(value) >= 10) {
      value = '10';
    }
    if (parseFloat(value) < 0) {
      value = '0';
    }
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    input.value = value;
  }

}
