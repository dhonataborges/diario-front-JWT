import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfessorTurmaService } from './../../../services/professorTurma.service ';
import { TurmaService } from './../../../services/turma.service';
import { ProfessorService } from './../../../services/professor.service';
import { Turma } from './../../../models/turma';
import { ProfessorTurma } from './../../../models/professorTurma';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-emturma-delete',
  templateUrl: './emturma-delete.component.html',
  styleUrls: ['./emturma-delete.component.css']
})
export class EmturmaDeleteComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.enturma.id = this.route.snapshot.paramMap.get('id');
    this.listarProf();
    this.listarTurma();
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['entrumacao'])
  }
  
  findById(): void {
    this.service.findById(this.enturma.id).subscribe(resposta => {
      this.enturma = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

 delete(): void {
    this.service.delete(this.enturma.id).subscribe(() => {
      this.toast.error('Enturmação deletato com sucesso!', 'Delete');
      this.router.navigate(['entrumacao']);
    }, err => {
      if (err.error.error.match('possui alunos')) {
        this.toast.error(err.error.error);
      }
      if (err.error.error.match('possui professor')) {
        this.toast.error(err.error.error);
      }
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