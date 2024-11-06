import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {HomeAlunoComponent} from './page/home-aluno/home-aluno.component';
import {RedefinirSenhaComponent} from './page/redefinir-senha/redefinir-senha.component';
import {UcConteudoComponent} from './page/uc-conteudo/uc-conteudo.component';
import {AlunoNotasFrequenciaComponent} from './page/aluno-notas-frequencia/aluno-notas-frequencia.component';
import {HomeProfessorComponent} from './page/home-professor/home-professor.component';
import {ProfConteudoComponent} from './page/prof-conteudo/prof-conteudo.component';
import {ProfNotasComponent} from './page/prof-notas/prof-notas.component';
import {ProfFrequenciaComponent} from './page/prof-frequencia/prof-frequencia.component';
import {ProfRelatoriosComponent} from './page/prof-relatorios/prof-relatorios.component';
import {GestorCriarTurmaComponent} from './page/gestor-criar-turma/gestor-criar-turma.component';
import {HomeGestorComponent} from './page/home-gestor/home-gestor.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home-aluno', component: HomeAlunoComponent},
  {path: 'redefinir-senha', component: RedefinirSenhaComponent},
  {path: 'uc-conteudo', component:UcConteudoComponent},
  {path: 'aluno-notas-frequencia', component: AlunoNotasFrequenciaComponent},
  {path: 'home-professor', component: HomeProfessorComponent},
  {path: 'prof-conteudo', component: ProfConteudoComponent},
  {path: 'prof-notas', component: ProfNotasComponent},
  {path: 'prof-frequencia', component: ProfFrequenciaComponent},
  {path: 'prof-relatorios', component: ProfRelatoriosComponent},
  {path: 'gestor-criar-turma', component: GestorCriarTurmaComponent},
  {path: 'home-gestor', component: HomeGestorComponent}
];
