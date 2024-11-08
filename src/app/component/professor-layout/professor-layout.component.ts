import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {AlocacaoDocenteService} from '../../service/alocacao-docente/alocacao-docente.service';
import {AlocacaoDocente} from '../../model/alocacaoDocente';
import {Curso} from '../../model/curso';
import {CursoService} from '../../service/curso/curso.service';
import {ProfConteudoLayoutComponent} from '../prof-conteudo-layout/prof-conteudo-layout.component';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {AlocacaoDiscenteService} from '../../service/alocacao-discente/alocacao-discente.service';
import {ProfNotasLayoutComponent} from '../prof-notas-layout/prof-notas-layout.component';

@Component({
  selector: 'app-professor-layout',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    UpperCasePipe,
    ProfConteudoLayoutComponent,
    ProfNotasLayoutComponent
  ],
  templateUrl: './professor-layout.component.html',
  styleUrl: './professor-layout.component.scss'
})
export class ProfessorLayoutComponent implements OnInit {

  alocacoesDocente: AlocacaoDocente[] = [];
  alocacoesDiscentePorTurma: Map<number, AlocacaoDiscente[]> = new Map();
  cursos: Map<number, Curso> = new Map();
  unidadesCurriculares: UnidadeCurricular[] = [];
  exibirDesempenhoTurma: boolean = false;
  exibirNotasFrequencia: boolean = false;
  turmaSelecionada!: TurmaUnidadeCurricular;

  constructor(private alocacaoDocenteService: AlocacaoDocenteService,
              private alocacaoDiscenteService: AlocacaoDiscenteService,
              private cursoService: CursoService) {
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      const idPessoa = usuario.pessoa.id;

      this.alocacaoDocenteService.carregarAlocacoesDocente(idPessoa).subscribe({
        next: (alocacoesDocente) => {
          this.alocacoesDocente = alocacoesDocente;
          this.unidadesCurriculares = this.alocacoesDocente.map(
            (alocacao) => alocacao.turmaUnidadeCurricular.unidadeCurricular
          );

          this.alocacoesDocente.forEach((alocacaoDocente) => {
            const idTurma = alocacaoDocente.turmaUnidadeCurricular.id;

            this.cursoService.carregarCursoPorIdTurma(idTurma).subscribe((curso) => {
              this.cursos.set(idTurma, curso);
            });

            this.alocacaoDiscenteService.carregarAlocacoesDiscentePorIdTurma(idTurma).subscribe({
              next: (alocacoesDiscente) => {
                this.alocacoesDiscentePorTurma.set(idTurma, alocacoesDiscente);
              },
              error: (error) => {
                console.log('Erro ao carregar alocações de discentes:', error.error);
              }
            });
          });
        },
        error: (error) => {
          console.log('Erro ao carregar alocações de docentes:', error.error);
        },
        complete: () => {
          console.log('Carregamento de alocações de docentes concluído.');
          console.log(this.alocacoesDocente);
          console.log(this.alocacoesDiscentePorTurma);
        }
      });
    }
  }

  mostrarDesempenhoTurma(turmaUnidade: TurmaUnidadeCurricular): void {
    if (this.exibirDesempenhoTurma && this.turmaSelecionada === turmaUnidade) {
      // Se já estiver mostrando o desempenho da turma selecionada, oculta
      this.exibirDesempenhoTurma = false;
    } else {
      // Caso contrário, ativa a exibição de desempenho e desativa notas/frequência
      this.turmaSelecionada = turmaUnidade;
      this.exibirDesempenhoTurma = true;
      this.exibirNotasFrequencia = false;
    }
  }

  lancarNotasFrequencias(turmaUnidade: TurmaUnidadeCurricular): void {
    if (this.exibirNotasFrequencia && this.turmaSelecionada === turmaUnidade) {
      // Se já estiver mostrando notas e frequência da turma selecionada, oculta
      this.exibirNotasFrequencia = false;
    } else {
      // Caso contrário, ativa a exibição de notas/frequência e desativa desempenho
      this.turmaSelecionada = turmaUnidade;
      this.exibirNotasFrequencia = true;
      this.exibirDesempenhoTurma = false;
    }
  }

  getCursoPorIdTurma(idTurma: number): Curso | undefined {
    return this.cursos.get(idTurma);
  }

  recarregarDadosPai(): void {
    this.carregarDados();
    this.lancarNotasFrequencias(this.turmaSelecionada)
  }

}
