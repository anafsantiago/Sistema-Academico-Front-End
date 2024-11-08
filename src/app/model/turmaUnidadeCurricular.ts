import {UnidadeCurricular} from './unidadeCurricular';
import {Turno} from './turno';

export interface TurmaUnidadeCurricular {
  id: number;
  codigoTurma: string;
  unidadeCurricular: UnidadeCurricular;
  turno: Turno;
}
