import { Turma } from './../../../models/turma';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { Profissional } from 'src/app/models/profissional';
import { FormControl, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.css']
})
export class TurmaCreateComponent implements OnInit {
 
  turma: Turma = {
    nomeTurma: '',
    professor: '',
    aluno: '',
    nomeProfessor: '',
    nomeAluno: ''
  }

  alunos: Aluno[] = [];
  professores: Profissional[] = [];

  aluno: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private profissionalService: ProfissionalService,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaAluno();
    this.listaProf();
  }

  cancel(): void {
    this.router.navigate(['turmas'])
  }
  
  create(): void {
    this.turmaService.create(this.turma).subscribe((resposta) => {
      this.router.navigate(['turmas'])
      this.turmaService.message('Turma adicionadas com sucesso!')
    })
  }

  listaAluno(): void {
    this.alunoService.findAll().subscribe(resposta => {
      this.alunos = resposta;
    })
  }

  listaProf(): void {
    this.profissionalService.findAll().subscribe(resposta => {
      this.professores = resposta;
    })
  }
  
  }