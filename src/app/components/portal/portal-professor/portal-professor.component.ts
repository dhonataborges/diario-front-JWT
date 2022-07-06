import { ProfessorTurmaDisciplina } from './../../../models/professorTurmaDisciplina';
import { ProfessorTurmaService } from './../../../services/professorTurma.service ';
import { ProfessorService } from 'src/app/services/professor.service';
import { TurmaService } from 'src/app/services/turma.service';
import { Router } from '@angular/router';
import { Turma } from 'src/app/models/turma';
import { Component, OnInit } from '@angular/core';
import { ProfessorTurma } from 'src/app/models/professorTurma';
import { professorTurmaDisciplinaService } from 'src/app/services/professorTurmaDisciplina.service';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-portal-professor',
  templateUrl: './portal-professor.component.html',
  styleUrls: ['./portal-professor.component.css']
})
export class PortalProfessorComponent implements OnInit {

  disciplinas: ProfessorTurmaDisciplina[] = [];
  
  turma: Turma[] = []; 

  disciplinaProfessor: ProfessorTurmaDisciplina = {
    id: '',
    anoLetivo: '',
    bimestre: '',
    disciplina: '',
    nomeDisciplina: '',
    professor: '', 
    nomeProfessorTurma: ''   
  }
 

  constructor(
    private router: Router,
    private service: professorTurmaDisciplinaService) { }

  ngOnInit(): void {
    this.findAll();
    this.listarDisciplina();
  }

  navigateTurmaAlunos(): void {
    this.router.navigate(['turmaAlunos'])
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        this.disciplinas.push(todo);
      })
    });
  }

  listarDisciplina(): void {
    this.service.findAll().subscribe(resposta => {
      this.disciplinas = resposta;
    })
  }
}