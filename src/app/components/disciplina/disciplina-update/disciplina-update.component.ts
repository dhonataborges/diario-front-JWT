import { FormControl, Validators } from '@angular/forms';
import { Disciplina } from 'src/app/models/disciplina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplina-update',
  templateUrl: './disciplina-update.component.html',
  styleUrls: ['./disciplina-update.component.css']
})
export class DisciplinaUpdateComponent implements OnInit {

  id_disciplina = ''

  disciplina: Disciplina = {
    id: '',
    nomeDisciplina: '',
    professores: ''
  }

  nomeDisciplina = new FormControl('', [Validators.minLength(5)])

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

  
  update(): void {
    this.service.update(this.disciplina).subscribe((resposta) => {
      this.router.navigate(['dashboard/disciplinas'])
      this.service.message('Disciplinas autualizada com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_disciplina).subscribe(resposta => {
      this.disciplina = resposta;
    })
  }

  errorValidNome() {
    if (this.nomeDisciplina.invalid) {
      return 'Nome é Obrigatório!';
    }
    return false;
  }
}