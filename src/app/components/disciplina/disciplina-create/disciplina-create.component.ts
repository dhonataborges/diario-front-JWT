import { ProfissionalService } from 'src/app/services/profissional.service';
import { Profissional } from 'src/app/models/profissional';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplina-create',
  templateUrl: './disciplina-create.component.html',
  styleUrls: ['./disciplina-create.component.css']
})
export class DisciplinaCreateComponent implements OnInit {
 

  disciplina: Disciplina = {
    id: '',
    nomeDisciplina: '',
    professores: []
  }

  nomeDisciplina = new FormControl('', [Validators.minLength(5)])
 
  
  constructor(
    private router: Router,
    private service: DisciplinaService,
    private serviceProf: ProfissionalService) { }

  ngOnInit(): void {
  }


  cancel(): void {
    this.router.navigate(['disciplinas'])
  }

  
  create(): void {
    this.service.create(this.disciplina).subscribe((resposta) => {
      this.router.navigate(['disciplinas'])
      this.service.message('Disciplina adicionadas com sucesso!')
    })
  }

   errorValidNome() {
    if (this.nomeDisciplina.invalid) {
      return 'Nome é Obrigatório!';
    }
    return false;
  }

}