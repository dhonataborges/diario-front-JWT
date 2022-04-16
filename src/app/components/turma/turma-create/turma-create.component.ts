import { Professor } from './../../../models/professor';
import { Turma } from './../../../models/turma';
import { FormControl, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.css']
})
export class TurmaCreateComponent implements OnInit {
 
  turma: Turma = {
    codTurma: '',
    nomeTurma: '',
    turno: '',
    anoCriacao: '',
    professor: '',
    nomeProfessor: ''
  }

  alunos: Aluno[] = [];
  professores: Professor[] = [];

  codTurma: FormControl = new FormControl(null, [Validators.required]);
  nomeTurma: FormControl = new FormControl(null, [Validators.required]);
  turno: FormControl = new FormControl(null, [Validators.required]);
  anoCriacao: FormControl = new FormControl(null, [Validators.required]);
  professor: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private professorService: ProfessorService,
    private turmaService: TurmaService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  listaProf(): void {
    this.professorService.findAll().subscribe(resposta => {
      this.professores = resposta;
    })
  }
  errorValidAnoCriacao() {
    if (this.anoCriacao.invalid) {
      return 'Ano de Criação é obrigatório!';
    }
    return false;
  }
  errorValidTurno() {
    if (this.turno.invalid) {
      return 'O turno é obrigatório!';
    }
    return false;
  }

  }