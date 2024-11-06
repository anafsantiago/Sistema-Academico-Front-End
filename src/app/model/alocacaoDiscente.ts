import {SituacaoAlocacaoDiscente} from './situacaoAlocacaoDiscente';
import {TurmaUnidadeCurricular} from './turmaUnidadeCurricular';
import {FichaIndividualDiscente} from './fichaIndividualDiscente';
import {Discente} from './discente';

export interface AlocacaoDiscente {
  id: number;
  discente: Discente;
  turmaUnidadeCurricular: TurmaUnidadeCurricular;
  situacaoAlocacaoDiscente: SituacaoAlocacaoDiscente;
  fichaIndividualAlocacaoDiscente: FichaIndividualDiscente;
}
