import {Pessoa} from './pessoa';
import {Papel} from './papel';

export interface Usuario {
  id: number;
  pessoa: Pessoa;
  papeis: Papel[];
}
