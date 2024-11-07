import {Nota} from './nota';

export interface FichaIndividualDiscente {
  id: number;
  notas: Nota[];
  faltas: number;
  resultadoFinal: number;
  porcentagemFrequencia: number;
}
