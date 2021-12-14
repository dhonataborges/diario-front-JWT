import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCreateComponent } from './views/components/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './views/components/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './views/components/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './views/components/aluno/aluno-update/aluno-update.component';
import { AulasLecionadasCreateComponent } from './views/components/aulasLecionadas/aulas-lecionadas-create/aulas-lecionadas-create.component';
import { AulasLecionadasDeleteComponent } from './views/components/aulasLecionadas/aulas-lecionadas-delete/aulas-lecionadas-delete.component';
import { AulasLecionadasReadComponent } from './views/components/aulasLecionadas/aulas-lecionadas-read/aulas-lecionadas-read.component';
import { AulasLecionadasUpdateComponent } from './views/components/aulasLecionadas/aulas-lecionadas-update/aulas-lecionadas-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { ObservacoesCreateComponent } from './views/components/observacoes/observacoes-create/observacoes-create.component';
import { ObservacoesDeleteComponent } from './views/components/observacoes/observacoes-delete/observacoes-delete.component';
import { ObservacoesReadComponent } from './views/components/observacoes/observacoes-read/observacoes-read.component';
import { ObservacoesUpdateComponent } from './views/components/observacoes/observacoes-update/observacoes-update.component';
import { ProfissionalCreateComponent } from './views/components/profissional/profissional-create/profissional-create.component';
import { ProfissionalDeleteComponent } from './views/components/profissional/profissional-delete/profissional-delete.component';
import { ProfissionalReadComponent } from './views/components/profissional/profissional-read/profissional-read.component';
import { ProfissionalUpdadeComponent } from './views/components/profissional/profissional-updade/profissional-updade.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'alunos',
    component: AlunoReadComponent
  },
  {
    path: 'alunos/create',
    component: AlunoCreateComponent
  },
  {
    path: 'alunos/update/:id',
    component: AlunoUpdateComponent
  },
  {
    path: 'alunos/delete/:id',
    component: AlunoDeleteComponent
  },
  {
    path: 'profissionais',
    component: ProfissionalReadComponent
  }
  ,{
    path: 'profissionais/create',
    component: ProfissionalCreateComponent
  },{
    path: 'profissionais/update/:id',
    component: ProfissionalUpdadeComponent
  }
  ,{
    path: 'profissionais/delete/:id',
    component: ProfissionalDeleteComponent
  },
  {
    path: 'observacoes',
    component: ObservacoesReadComponent
  },
  {
    path: 'observacoes/create',
    component: ObservacoesCreateComponent
  },
  {
    path: 'observacoes/update/:id',
    component: ObservacoesUpdateComponent
  },
  {
    path: 'observacoes/delete/:id',
    component: ObservacoesDeleteComponent
  },
  {
    path: 'aulasLecionadas',
    component: AulasLecionadasReadComponent
  },
  {
    path: 'aulasLecionadas/create',
    component: AulasLecionadasCreateComponent
  },
  {
    path: 'aulasLecionadas/update/:id',
    component: AulasLecionadasUpdateComponent
  },
  {
    path: 'aulasLecionadas/delete/:id',
    component: AulasLecionadasDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
