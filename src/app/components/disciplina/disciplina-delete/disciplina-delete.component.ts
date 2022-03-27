import { FormControl, Validators } from '@angular/forms';
import { Disciplina } from 'src/app/models/disciplina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplina-delete',
  templateUrl: './disciplina-delete.component.html',
  styleUrls: ['./disciplina-delete.component.css']
})
export class DisciplinaDeleteComponent implements OnInit {

  id_disciplina = ''

  disciplina: Disciplina = {
    id: '',
    nomeDisciplina: '',
    professores: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DisciplinaService) { }

  ngOnInit(): void {
    this.id_disciplina = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  cancel(): void {
    this.router.navigate(['disciplinas'])
  }

  
  delete(): void {
    this.service.delete(this.id_disciplina).subscribe((resposta) => {
      this.router.navigate(['disciplinas'])
      this.service.message('Disciplina removida com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_disciplina).subscribe(resposta => {
      this.disciplina = resposta;
    })
  }
}