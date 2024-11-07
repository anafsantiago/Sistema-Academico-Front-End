import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {FichaIndividualDiscente} from '../../model/fichaIndividualDiscente';
import {AlocacaoDocenteService} from '../../service/alocacao-docente/alocacao-docente.service';
import {AlocacaoDocente} from '../../model/alocacaoDocente';
import {Curso} from '../../model/curso';
import {CursoService} from '../../service/curso/curso.service';
import {ProfConteudoLayoutComponent} from '../prof-conteudo-layout/prof-conteudo-layout.component';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {AlocacaoDiscenteService} from '../../service/alocacao-discente/alocacao-discente.service';

@Component({
  selector: 'app-professor-layout',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    UpperCasePipe,
    ProfConteudoLayoutComponent
  ],
  templateUrl: './professor-layout.component.html',
  styleUrl: './professor-layout.component.scss'
})
export class ProfessorLayoutComponent implements OnInit {

  alocacoesDocente: AlocacaoDocente[] = [];
  alocacoesDiscente: AlocacaoDiscente[] = [];
  cursos: Map<number, Curso> = new Map();
  unidadesCurriculares: UnidadeCurricular[] = [];
  exibirConteudo: boolean = false;
  turmaSelecionada!: TurmaUnidadeCurricular;

  constructor(private alocacaoDocenteService: AlocacaoDocenteService,
              private alocacaoDiscenteService: AlocacaoDiscenteService,
              private cursoService: CursoService) {
  }

  ngOnInit(): void {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      const idPessoa = usuario.pessoa.id;

      this.alocacaoDocenteService.carregarAlocacoesDocente(idPessoa).subscribe({
        next: (alocacoesDocente) => {
          this.alocacoesDocente = alocacoesDocente;
          this.unidadesCurriculares = this.alocacoesDocente.map((alocacao) => alocacao.turmaUnidadeCurricular.unidadeCurricular);

          this.alocacoesDocente.forEach((alocacaoDocente) => {
            const idTurma = alocacaoDocente.turmaUnidadeCurricular.id;

            this.cursoService.carregarCursoPorIdTurma(idTurma).subscribe((curso) => {
              this.cursos.set(idTurma, curso);
            });
          });
        },
        error: (error) => {
          console.log('Erro:', error.error);
        },
        complete: () => {
          console.log('Carregamento de alocações concluído.');
        }
      });
    }
  }

  mostrarConteudo(turmaUnidade: TurmaUnidadeCurricular): void {
    let idTurma = turmaUnidade.id;
    this.alocacaoDiscenteService.carregarAlocacoesDiscentePorIdTurma(idTurma).subscribe({
      next: (alocacoesDocente) => {
        this.alocacoesDiscente = alocacoesDocente;
      },
      error: (error) => {
        console.log('Erro:', error.error);
      },
      complete: () => {
        console.log('Carregamento de alocações concluído.');
      }
    });
    if (this.turmaSelecionada === turmaUnidade) {
      this.exibirConteudo = !this.exibirConteudo;
    } else {
      this.turmaSelecionada = turmaUnidade;
      this.exibirConteudo = true;
    }
  }

  getCursoPorIdTurma(idTurma: number): Curso | undefined {
    return this.cursos.get(idTurma);
  }

}
