import { ProfessorTurmaService } from './../../../services/professorTurma.service ';
import { ProfessorService } from 'src/app/services/professor.service';
import { TurmaService } from 'src/app/services/turma.service';
import { Router } from '@angular/router';
import { Turma } from 'src/app/models/turma';
import { Component, OnInit } from '@angular/core';
import { ProfessorTurma } from 'src/app/models/professorTurma';

@Component({
  selector: 'app-portal-professor',
  templateUrl: './portal-professor.component.html',
  styleUrls: ['./portal-professor.component.css']
})
export class PortalProfessorComponent implements OnInit {

  listarTurma: ProfessorTurma[] = []

  constructor(private router : Router,
              private service: ProfessorTurmaService) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  navigateTurmaAlunos():void {
    this.router.navigate(['turmaAlunos'])
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
      this.listarTurma.push(todo);
      })
    });
  }
}