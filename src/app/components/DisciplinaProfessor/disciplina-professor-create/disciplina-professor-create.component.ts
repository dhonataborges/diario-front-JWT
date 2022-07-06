import { ProfessorTurma } from './../../../models/professorTurma';
import { professorTurmaDisciplinaService } from './../../../services/professorTurmaDisciplina.service';
import { DisciplinaService } from './../../../services/disciplina.service';
import { Disciplina } from './../../../models/disciplina';
import { ProfessorTurmaDisciplina } from 'src/app/models/professorTurmaDisciplina';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProfessorTurmaService } from 'src/app/services/professorTurma.service ';

@Component({
  selector: 'app-disciplina-professor-create',
  templateUrl: './disciplina-professor-create.component.html',
  styleUrls: ['./disciplina-professor-create.component.css']
})
export class DisciplinaProfessorCreateComponent implements OnInit {

  disciplinaProfessor: ProfessorTurmaDisciplina = {
    id: '',
    anoLetivo: '',
    bimestre:  '',
    disciplina: '',
    nomeDisciplina: '',
    professor: '',
    nomeProfessorTurma: ''  
  }

  disciplinas: Disciplina[] = [];
  professores: ProfessorTurma[] = [];

  constructor(
    private professorTurmaService: ProfessorTurmaService,
    private disciplinaService: DisciplinaService,
    private service: professorTurmaDisciplinaService,
    private toast: ToastrService,   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarProf();
    this.listarDisciplina();
  }

  cancel(): void {
    this.router.navigate(['disciplinaProfessor'])
  }
  
  create(): void {
    this.service.create(this.disciplinaProfessor).subscribe((resposta) => {
      this.router.navigate(['disciplinaProfessor'])
      this.toast.success('Disciplina adribuida com sucesso!')
    })
  }

  listarProf(): void {
    this.professorTurmaService.findAll().subscribe(resposta => {
      this.professores = resposta;
    })
  }

  listarDisciplina(): void {
    this.disciplinaService.findAll().subscribe(resposta => {
      this.disciplinas = resposta;
    })
  }

  }