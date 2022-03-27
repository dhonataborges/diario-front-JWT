import { ProfissionalCreateComponent } from './components/profissional/profissional-create/profissional-create.component';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMenuModule} from '@angular/material/menu';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { MatNativeDateModule } from '@angular/material/core';

import { ProfissionalReadComponent } from './components/profissional/profissional-read/profissional-read.component';
import { ProfissionalUpdadeComponent } from './components/profissional/profissional-updade/profissional-updade.component';
import { ProfissionalDeleteComponent } from './components/profissional/profissional-delete/profissional-delete.component';
import { ObservacoesReadComponent } from './components/observacoes/observacoes-read/observacoes-read.component';
import { ObservacoesCreateComponent } from './components/observacoes/observacoes-create/observacoes-create.component';
import { ObservacoesUpdateComponent } from './components/observacoes/observacoes-update/observacoes-update.component';
import { ObservacoesDeleteComponent } from './components/observacoes/observacoes-delete/observacoes-delete.component';
import { AulasLecionadasReadComponent } from './components/aulasLecionadas/aulas-lecionadas-read/aulas-lecionadas-read.component';
import { AulasLecionadasCreateComponent } from './components/aulasLecionadas/aulas-lecionadas-create/aulas-lecionadas-create.component';
import { AulasLecionadasUpdateComponent } from './components/aulasLecionadas/aulas-lecionadas-update/aulas-lecionadas-update.component';
import { AulasLecionadasDeleteComponent } from './components/aulasLecionadas/aulas-lecionadas-delete/aulas-lecionadas-delete.component';
import { DisciplinaCreateComponent } from './components/disciplina/disciplina-create/disciplina-create.component';
import { DisciplinaReadComponent } from './components/disciplina/disciplina-read/disciplina-read.component';
import { DisciplinaUpdateComponent } from './components/disciplina/disciplina-update/disciplina-update.component';
import { DisciplinaDeleteComponent } from './components/disciplina/disciplina-delete/disciplina-delete.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { ObservacoesViewsComponent } from './components/observacoes/observacoes-views/observacoes-views.component';
import { AulasLecionadasViewsComponent } from './components/aulasLecionadas/aulas-lecionadas-views/aulas-lecionadas-views.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    AlunoReadComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    ProfissionalReadComponent,
    ProfissionalCreateComponent,
    ProfissionalUpdadeComponent,
    ProfissionalDeleteComponent,
    ObservacoesReadComponent,
    ObservacoesCreateComponent,
    ObservacoesUpdateComponent,
    ObservacoesDeleteComponent,
    AulasLecionadasReadComponent,
    AulasLecionadasCreateComponent,
    AulasLecionadasUpdateComponent,
    AulasLecionadasDeleteComponent,
    DisciplinaCreateComponent,
    DisciplinaReadComponent,
    DisciplinaUpdateComponent,
    DisciplinaDeleteComponent,
    TurmaReadComponent,
    ObservacoesViewsComponent,
    AulasLecionadasViewsComponent,
    TurmaCreateComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule,   
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
