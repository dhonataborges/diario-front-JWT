import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Professor } from 'src/app/models/professor';
import { ProfessorTurma } from 'src/app/models/professorTurma';
import { Turma } from 'src/app/models/turma';
import { ProfessorService } from 'src/app/services/professor.service';
import { ProfessorTurmaService } from 'src/app/services/professorTurma.service ';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-emturma-update',
  templateUrl: './emturma-update.component.html',
  styleUrls: ['./emturma-update.component.css']
})
export class EmturmaUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.enturma).subscribe(() => {
      this.toast.success('Enturmação atualizado com sucesso!', 'Atualizado');
      this.router.navigate(['entrumacao']);
    }, ex => {
      this.toast.error(ex.error.error);
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