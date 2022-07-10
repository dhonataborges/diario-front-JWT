import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Disciplina } from 'src/app/models/disciplina';
import { ProfessorTurma } from 'src/app/models/professorTurma';
import { ProfessorTurmaDisciplina } from 'src/app/models/professorTurmaDisciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorTurmaService } from 'src/app/services/professorTurma.service ';
import { professorTurmaDisciplinaService } from 'src/app/services/professorTurmaDisciplina.service';

@Component({
  selector: 'app-disciplina-professor-delete',
  templateUrl: './disciplina-professor-delete.component.html',
  styleUrls: ['./disciplina-professor-delete.component.css']
})
export class DisciplinaProfessorDeleteComponent implements OnInit {

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

  delete(): void {
    this.service.delete(this.disciplinaProfessor.id).subscribe(() => {
      this.toast.error('Deletato com sucesso!', 'Delete');
      this.router.navigate(['entrumacao']);
    }, err => {
      if (err.error.error.match('possui aulas')) {
        this.toast.error(err.error.error);
      }
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