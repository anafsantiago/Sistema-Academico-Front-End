import {Component, Input} from '@angular/core';
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
import {UpperCasePipe} from '@angular/common';
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
    MatHeaderCellDef
  ],
  templateUrl: './prof-conteudo-layout.component.html',
  styleUrl: './prof-conteudo-layout.component.scss'
})
export class ProfConteudoLayoutComponent {
  @Input() alocacoesDiscente!: AlocacaoDiscente[];
  @Input() turmaUnidade!: TurmaUnidadeCurricular;

  colunas: string[] = [
    'discente', 'notaFinal', 'porcentagemPresenca', 'situacaoAluno'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    console.log(this.alocacoesDiscente);
    if (this.alocacoesDiscente) {
      this.dataSource.data = [this.alocacoesDiscente];
    }
  }
}
