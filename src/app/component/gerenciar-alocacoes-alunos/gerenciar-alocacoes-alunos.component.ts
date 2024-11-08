import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {HorarioDataComponent} from '../horario-data/horario-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MatChipListbox, MatChipOption} from '@angular/material/chips';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {TurmaUnidadeCurricularService} from '../../service/turma-unidade-curricular/turma-unidade-curricular.service';
import {DiscenteService} from '../../service/discente/discente.service';
import {Discente} from '../../model/discente';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton, MatMiniFabButton} from '@angular/material/button';
import {MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {AlocacaoDiscenteService} from '../../service/alocacao-discente/alocacao-discente.service';

@Component({
  selector: 'app-gerenciar-alocacoes-alunos',
  standalone: true,
  imports: [
    ToolbarComponent,
    UserOptionsComponent,
    HorarioDataComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    MatChipListbox,
    MatChipOption,
    MatIcon,
    MatFabButton,
    MatLabel,
    MatInput,
    MatMiniFabButton
  ],
  templateUrl: './gerenciar-alocacoes-alunos.component.html',
  styleUrl: './gerenciar-alocacoes-alunos.component.scss'
})
export class GerenciarAlocacoesAlunosComponent implements OnInit {
  @Output() atualizarPai = new EventEmitter<void>()

  turmasUnidades: TurmaUnidadeCurricular[] = [];
  turmaSelecionada: TurmaUnidadeCurricular | null = null;

  readonly opcoesAlocacao: string[] = ['Aluno', 'Professor'];
  alocacaoSelecionada: string = 'Aluno';

  codigoOuCpf: string = '';
  nome: string = '';

  discente: Discente = { pessoa: { nome: '' } } as Discente;

  constructor(private turmaUnidadeCurricularService: TurmaUnidadeCurricularService,
              private discenteService: DiscenteService,
              private alocacaoDiscenteService: AlocacaoDiscenteService) {
  }

  ngOnInit(): void {
  }

  carregarDiscente(cpf: string): void {
    if (cpf) {
      this.discenteService.carregarDiscentePorCpf(cpf).subscribe({
        next: (discente) => {
          this.discente = discente;
          this.carregarTurmasAlocaveis();
        },
        error: (error) => {
          console.log('Erro ao carregar discente.', error.error);
        },
        complete: () => {  // Aqui usamos uma função de seta
          console.log('Discente carregado com sucesso.');
        }
      });
    }
  }

  carregarTurmasAlocaveis(): void {
    this.turmaUnidadeCurricularService.carregarTurmasUnidadesAlocaveis(this.discente.id).subscribe({
      next: (turmas) => {
        this.turmasUnidades = turmas;
      },
      error: (error) => {
        console.log('Erro ao carregar as turmas.', error.error);
      }
    });
  }

  alocar(): void {
    if (this.discente && this.turmaSelecionada) {
      this.alocacaoDiscenteService.cadastrarAlocacao(this.discente.id, this.turmaSelecionada.id).subscribe({
        next: (mensagem) => {
          console.log('Alocação realizada com sucesso:', mensagem);
        },
        error: (error) => {
          console.log('Erro ao realizar a alocação:', error);
        },
        complete: () => {
          this.atualizarPai.emit();
        }
      });
    }
  }

}
