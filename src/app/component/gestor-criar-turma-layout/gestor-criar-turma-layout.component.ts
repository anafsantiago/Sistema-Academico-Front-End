import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UnidadeCurricular} from '../../model/unidadeCurricular';
import {TurmaUnidadeCurricular} from '../../model/turmaUnidadeCurricular';
import {UnidadeCurricularService} from '../../service/unidade-curricular/unidade-curricular.service';
import {TurmaUnidadeCurricularService} from '../../service/turma-unidade-curricular/turma-unidade-curricular.service';
import {Turno} from '../../model/turno';
import {TurnoService} from '../../service/turno/turno.service';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gestor-criar-turma-layout',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './gestor-criar-turma-layout.component.html',
  styleUrl: './gestor-criar-turma-layout.component.scss'
})
export class GestorCriarTurmaLayoutComponent implements OnInit {
  @Output() atualizarPai = new EventEmitter<void>();
  unidadesCurriculares: UnidadeCurricular[] = [];
  unidadeCurricularSelecionada: UnidadeCurricular | null = null;
  turnos: Turno[] = [];
  turnoSelecionado: Turno | null = null;
  codigoTurma!: string;
  novaTurma!: TurmaUnidadeCurricular;

  constructor(private unidadeCurricularService: UnidadeCurricularService,
              private turmaUnidadeCurricularService: TurmaUnidadeCurricularService,
              private turnoService: TurnoService,) {
  }

  ngOnInit(): void {
    this.carregarUnidades();
    this.carregarTurnos();
  }

  carregarUnidades(): void {
    this.unidadeCurricularService.carregarUnidades().subscribe({
      next: (unidades) => {
        this.unidadesCurriculares = unidades;
      },
      error: (error) => {
        console.log('Erro ao carregar unidades curriculares.', error.error);
      }
    });
  }

  carregarTurnos(): void {
    this.turnoService.carregarTurnos().subscribe({
      next: (turnos) => {
        this.turnos = turnos;
      },
      error: (error) => {
        console.log('Erro ao carregar turnos:', error.error);
      }
    });
  }

  verificarSelecoes() {
    if (this.unidadeCurricularSelecionada && this.turnoSelecionado) {
      this.turmaUnidadeCurricularService.gerarCodigoTurma(
        this.unidadeCurricularSelecionada.siglaUnidadeCurricular,
        this.turnoSelecionado.abreviacaoTurno
      ).subscribe({
        next: (codigoTurmaGerado) => {
          this.codigoTurma = codigoTurmaGerado;
        },
        error: (error) => {
          console.log('Erro ao gerar código da turma.', error.error);
        }
      });
    } else {
      this.codigoTurma = '';
    }
  }

  criarTurma(): void {
    if (!this.unidadeCurricularSelecionada || !this.turnoSelecionado) {
      console.log('Unidade Curricular ou Turno não selecionados');
      return;
    }
    this.novaTurma = {
      id: 0,
      unidadeCurricular: this.unidadeCurricularSelecionada,
      turno: this.turnoSelecionado,
      codigoTurma: this.codigoTurma
    }
    console.log(this.novaTurma);
    this.turmaUnidadeCurricularService.cadastrarTurma(this.novaTurma).subscribe({
      next: (mensagem) => {
        console.log(mensagem);
      },
      error: (error) => {
        console.log('Erro ao cadastrar turma:', error.error);
      },
      complete: () => {
        this.atualizarPai.emit();
      }
    });
  }

}
