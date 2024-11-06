import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatriculaDiscenteService} from '../../service/matricula-discente/matricula-discente.service';
import {MatriculaCurso} from '../../model/matriculaCurso';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [
    MatButton,
    MatLabel,
    MatFormField,
    NgIf
  ],
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  nomePessoa: string | null = '';
  nomeCurso: string | null = '';
  periodoAtual!: number;
  isDiscente: boolean = false;
  matriculasDiscente!: MatriculaCurso;

  constructor(private matriculaDiscenteService: MatriculaDiscenteService) {
  }

  ngOnInit(): void {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      this.nomePessoa = usuario.pessoa.nome;
      this.isDiscente = usuario.papeis.some((papel: { descricao: string }) => papel.descricao === 'DISCENTE');

      if (this.isDiscente) {
        const idPessoa = usuario.pessoa.id;
        this.matriculaDiscenteService.carregarDadosMatriculaDiscente(idPessoa).subscribe({
          next: matriculasDiscente => {
            this.matriculasDiscente = matriculasDiscente;
            this.nomeCurso = matriculasDiscente.curso.nomeCurso;
            this.periodoAtual = matriculasDiscente.periodo;
            console.log(this.matriculasDiscente);
          },
          error: error => {
            console.log('Erro:', error.error);
          },
          complete: () => {
            console.log('Carregamento de matrícula concluído.');
          }
        });
      }
    }
  }
}
