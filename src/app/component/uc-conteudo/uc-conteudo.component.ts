import {Component, Input, OnInit} from '@angular/core';
import {HorarioDataComponent} from '../horario-data/horario-data.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {DecimalPipe, NgIf, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-uc-conteudo',
  standalone: true,
  imports: [
    HorarioDataComponent,
    ToolbarComponent,
    UserOptionsComponent,
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgIf,
    MatTable,
    MatTableModule,
    UpperCasePipe,
    TitleCasePipe,
    DecimalPipe
  ],
  templateUrl: './uc-conteudo.component.html',
  styleUrl: './uc-conteudo.component.scss'
})
export class UcConteudoComponent implements OnInit {
  @Input() unidadeCurricular!: UnidadeCurricular;
  @Input() fichaIndividual!: FichaIndividualDiscente;
  @Input() nomeUnidadeCurricular!: string;
  @Input() situacaoAlocacao!: string;

  colunas: string[] = [
    'unidade1', 'unidade2', 'unidade3', 'reposicao', 'faltas', 'situacao'
  ];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    console.log(this.fichaIndividual);
    if (this.fichaIndividual) {
      this.dataSource.data = [this.fichaIndividual];
    }
  }

/*  getNotaReposicao(): number | string {
    const reposicaoNota = this.fichaIndividual.notas.find(nota => nota.reposicao);
    return reposicaoNota ? reposicaoNota.valor : 'N/A';
  }*/
}
