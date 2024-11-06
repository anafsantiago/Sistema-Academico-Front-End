import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {AlocacaoDiscenteService} from '../../service/alocacao-discente/alocacao-discente.service';
import {AlocacaoDiscente} from '../../model/alocacaoDiscente';

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
  styleUrl: './user-options.component.scss'
})
export class UserOptionsComponent {
  nomePessoa: string | null = '';
  isDiscente: boolean = false;
  alocacaoDiscente!: AlocacaoDiscente;

  constructor(private alocacaoDiscenteService: AlocacaoDiscenteService) {
  }

  ngOnInit(): void {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      this.nomePessoa = usuario.pessoa.nome;
      this.isDiscente = usuario.papeis.some((papel: { descricao: string }) => papel.descricao === 'DISCENTE');

      if (this.isDiscente) {
        const idPessoa = usuario.pessoa.id;
        this.alocacaoDiscenteService.carregarAlocacaoDiscente(idPessoa).subscribe({
          next: alocacaoDiscente => {
            this.alocacaoDiscente = alocacaoDiscente;
            console.log(this.alocacaoDiscente)
          },
          error: error => {
            console.log('Erro:', error.error);
          },
          complete: () => {
            console.log('Carregamento de alocação concluído.');
          }
        });
      }
    }
  }

}
