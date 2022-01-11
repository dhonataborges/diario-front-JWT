import { NgModule } from '@angular/core';
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

import { HomeComponent } from './views/components/home/home.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { AlunoReadComponent } from './views/components/aluno/aluno-read/aluno-read.component';
import { AlunoCreateComponent } from './views/components/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './views/components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './views/components/aluno/aluno-delete/aluno-delete.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfissionalReadComponent } from './views/components/profissional/profissional-read/profissional-read.component';
import { ProfissionalCreateComponent } from './views/components/profissional/profissional-create/profissional-create.component';
import { ProfissionalUpdadeComponent } from './views/components/profissional/profissional-updade/profissional-updade.component';
import { ProfissionalDeleteComponent } from './views/components/profissional/profissional-delete/profissional-delete.component';
import { ObservacoesReadComponent } from './views/components/observacoes/observacoes-read/observacoes-read.component';
import { ObservacoesCreateComponent } from './views/components/observacoes/observacoes-create/observacoes-create.component';
import { ObservacoesUpdateComponent } from './views/components/observacoes/observacoes-update/observacoes-update.component';
import { ObservacoesDeleteComponent } from './views/components/observacoes/observacoes-delete/observacoes-delete.component';
import { AulasLecionadasReadComponent } from './views/components/aulasLecionadas/aulas-lecionadas-read/aulas-lecionadas-read.component';
import { AulasLecionadasCreateComponent } from './views/components/aulasLecionadas/aulas-lecionadas-create/aulas-lecionadas-create.component';
import { AulasLecionadasUpdateComponent } from './views/components/aulasLecionadas/aulas-lecionadas-update/aulas-lecionadas-update.component';
import { AulasLecionadasDeleteComponent } from './views/components/aulasLecionadas/aulas-lecionadas-delete/aulas-lecionadas-delete.component';
import { LoginComponent } from './views/components/login/login.component';
import { AuthService } from './service/auth.service';
import { ContaCreateComponent } from './views/components/conta/conta-create/conta-create.component';
import { AutenticarComponent } from './views/components/autenticar/autenticar.component';
import { DashboardLayoutComponent } from './views/layouts/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
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
    LoginComponent,
    ContaCreateComponent,
    AutenticarComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
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
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
