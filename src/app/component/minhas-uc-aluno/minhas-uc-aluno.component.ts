import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgForOf, NgIf} from '@angular/common';
import {AlocacaoDiscenteService} from '../../service/alocacao-discente/alocacao-discente.service';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {AlunoNotasFrequenciaComponent} from '../../page/aluno-notas-frequencia/aluno-notas-frequencia.component';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {UcConteudoComponent} from '../uc-conteudo/uc-conteudo.component';

@Component({
  selector: 'app-minhas-uc-aluno',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgIf,
    UcConteudoComponent,
    AlunoNotasFrequenciaComponent
  ],
  templateUrl: './minhas-uc-aluno.component.html',
  styleUrl: './minhas-uc-aluno.component.scss'
})
export class MinhasUcAlunoComponent implements OnInit {
  alocacoesDiscente: AlocacaoDiscente[] = [];
  unidadesCurriculares: UnidadeCurricular[] = [];
  exibirConteudo: boolean = false;
  exibirNotasFrequencias: boolean = false;
  unidadeSelecionada!: UnidadeCurricular;
  fichaIndividualSelecionada!: FichaIndividualDiscente;
  nomeUnidadeCurricularSelecionada!: string;
  situacaoAlocacaoSelecionada!: string;

  constructor(private alocacaoDiscenteService: AlocacaoDiscenteService) {
  }

  ngOnInit(): void {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      const idPessoa = usuario.pessoa.id;

      this.alocacaoDiscenteService.carregarAlocacoesDiscente(idPessoa).subscribe({
        next: alocacoesDiscente => {
          this.alocacoesDiscente = alocacoesDiscente;

          this.unidadesCurriculares = this.alocacoesDiscente.map(alocacao => {
            return alocacao.turmaUnidadeCurricular.unidadeCurricular;
          });
          console.log(this.unidadesCurriculares);
        },
        error: error => {
          console.log('Erro:', error.error);
        },
        complete: () => {
          console.log('Carregamento de alocações concluído.');
        }
      });
    }
  }

  mostrarConteudo(unidade: UnidadeCurricular): void {
    if (this.unidadeSelecionada === unidade) {
      this.exibirConteudo = !this.exibirConteudo;
    } else {
      this.unidadeSelecionada = unidade;
      this.exibirConteudo = true;
    }
  }

  mostrarNotasFrequencias(fichaIndividual: FichaIndividualDiscente, nomeUnidadeCurricular: string, situacaoAlocacao: string): void {
    this.nomeUnidadeCurricularSelecionada = nomeUnidadeCurricular;
    this.situacaoAlocacaoSelecionada = situacaoAlocacao;
    if (this.fichaIndividualSelecionada === fichaIndividual) {
      this.exibirNotasFrequencias = !this.exibirNotasFrequencias;
    } else {
      this.fichaIndividualSelecionada = fichaIndividual;
      this.exibirNotasFrequencias = true;
    }
  }

}
