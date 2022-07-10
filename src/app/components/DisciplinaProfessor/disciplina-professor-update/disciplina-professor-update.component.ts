import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { professorTurmaDisciplinaService } from './../../../services/professorTurmaDisciplina.service';
import { DisciplinaService } from './../../../services/disciplina.service';
import { ProfessorTurmaService } from './../../../services/professorTurma.service ';
import { ProfessorTurmaDisciplina } from './../../../models/professorTurmaDisciplina';
import { ProfessorTurma } from './../../../models/professorTurma';
import { Disciplina } from './../../../models/disciplina';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-professor-update',
  templateUrl: './disciplina-professor-update.component.html',
  styleUrls: ['./disciplina-professor-update.component.css']
})
export class DisciplinaProfessorUpdateComponent implements OnInit {

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
    private professorService: ProfessorTurmaService,
    private disciplinaService: DisciplinaService,
    private service: professorTurmaDisciplinaService,
    private toast: ToastrService,   
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.disciplinaProfessor.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listarProf();
    this.listarDisciplina();
  }

  cancel(): void {
    this.router.navigate(['disciplinaProfessor'])
  }
  
  findById(): void {
    this.service.findById(this.disciplinaProfessor.id).subscribe(resposta => {
      this.disciplinaProfessor = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

  update(): void {
    this.service.update(this.disciplinaProfessor).subscribe(() => {
      this.toast.success('Atualizado com sucesso!', 'Atualizado');
      this.router.navigate(['disciplinaProfessor']);
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

  listarProf(): void {
    this.professorService.findAll().subscribe(resposta => {
      this.professores = resposta;
    })
  }

  listarDisciplina(): void {
    this.disciplinaService.findAll().subscribe(resposta => {
      this.disciplinas = resposta;
    })
  }

  }