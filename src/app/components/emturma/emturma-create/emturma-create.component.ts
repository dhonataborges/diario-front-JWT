import { ProfessorService } from './../../../services/professor.service';
import { Turma } from './../../../models/turma';
import { Component, OnInit } from '@angular/core';
import { ProfessorTurma } from 'src/app/models/professorTurma';
import { TurmaService } from 'src/app/services/turma.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProfessorTurmaService } from 'src/app/services/professorTurma.service ';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-emturma-create',
  templateUrl: './emturma-create.component.html',
  styleUrls: ['./emturma-create.component.css']
})
export class EmturmaCreateComponent implements OnInit {

  enturma: ProfessorTurma = {
    id: '',
    turma: '',
    descricaoTurma: '',
    professor: '',
    nomeProfessor: '',
    dataAtribuicao: '',
    status: '',    
  }

  turmas: Turma[] = [];
  professores: Professor[] = [];

  constructor(
    private professorService: ProfessorService,
    private turmaService: TurmaService,
    private service: ProfessorTurmaService,
    private toast: ToastrService,   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarProf();
    this.listarTurma();
  }

  cancel(): void {
    this.router.navigate(['entrumacao'])
  }
  
  create(): void {
    this.service.create(this.enturma).subscribe((resposta) => {
      this.router.navigate(['entrumacao'])
      this.toast.success('Enturmado com sucesso!')
    })
  }

  listarProf(): void {
    this.professorService.findAll().subscribe(resposta => {
      this.professores = resposta;
    })
  }

  listarTurma(): void {
    this.turmaService.findAll().subscribe(resposta => {
      this.turmas = resposta;
    })
  }

  }