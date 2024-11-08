import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

@Component({
  selector: 'app-prof-conteudo-layout',
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
    DecimalPipe
  ],
  templateUrl: './prof-conteudo-layout.component.html',
  styleUrl: './prof-conteudo-layout.component.scss'
})
export class ProfConteudoLayoutComponent implements OnChanges{
  @Input() alocacoesDiscente: Map<number, AlocacaoDiscente[]> = new Map();
  @Input() turmaUnidade!: TurmaUnidadeCurricular;

  colunas: string[] = [
    'discente', 'notaFinal', 'porcentagemPresenca', 'situacaoAluno'];
  dataSource = new MatTableDataSource<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['turmaUnidade'] && this.turmaUnidade) {
      const idTurma = this.turmaUnidade.id;
      const alocacoesParaTurma = this.alocacoesDiscente.get(idTurma) || [];
      this.dataSource.data = alocacoesParaTurma;
    }
  }
}
