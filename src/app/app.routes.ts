import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {HomeAlunoComponent} from './page/home-aluno/home-aluno.component';
import {RedefinirSenhaComponent} from './page/redefinir-senha/redefinir-senha.component';
import {UcConteudoComponent} from './page/uc-conteudo/uc-conteudo.component';
import {AlunoNotasFrequenciaComponent} from './page/aluno-notas-frequencia/aluno-notas-frequencia.component';
import {HomeProfessorComponent} from './page/home-professor/home-professor.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home-aluno', component: HomeAlunoComponent},
  {path: 'redefinir-senha', component: RedefinirSenhaComponent},
  {path: 'uc-conteudo', component:UcConteudoComponent},
  {path: 'aluno-notas-frequencia', component: AlunoNotasFrequenciaComponent},
  {path: 'home-professor', component: HomeProfessorComponent}
];
