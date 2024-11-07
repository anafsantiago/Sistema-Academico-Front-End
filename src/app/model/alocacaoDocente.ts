import {TurmaUnidadeCurricular} from './turmaUnidadeCurricular';
import {Docente} from './docente';

export interface AlocacaoDocente {
  id: number;
  docente: Docente;
  turmaUnidadeCurricular: TurmaUnidadeCurricular;
}
