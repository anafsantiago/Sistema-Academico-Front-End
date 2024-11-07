import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {UpperCasePipe} from '@angular/common';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

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
    MatInput
  ],
  templateUrl: './prof-notas-layout.component.html',
  styleUrl: './prof-notas-layout.component.scss'
})
export class ProfNotasLayoutComponent implements OnChanges {

  @Input() alocacoesDiscente: Map<number, AlocacaoDiscente[]> = new Map();
  @Input() turmaUnidade!: TurmaUnidadeCurricular;

  colunas: string[] = [
    'discente', 'unidade1', 'unidade2', 'unidade3','reposicao', 'notaFinal', 'faltas', 'situacaoAluno'];
  dataSource = new MatTableDataSource<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['turmaUnidade'] && this.turmaUnidade) {
      const idTurma = this.turmaUnidade.id;
      const alocacoesParaTurma = this.alocacoesDiscente.get(idTurma) || [];
      this.dataSource.data = alocacoesParaTurma;
    }
  }

/*  getNotaReposicao(): number | string {
    const reposicaoNota = this.fichaIndividual.notas.find(nota => nota.reposicao);
    return reposicaoNota ? reposicaoNota.valor : 'N/A';
  }*/

}
