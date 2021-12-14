import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AulasLecionadas } from 'src/app/models/aulasLecionadas';
import { AulasLecionadasService } from 'src/app/service/aulas-lecionadas.service';

@Component({
  selector: 'app-aulas-lecionadas-create',
  templateUrl: './aulas-lecionadas-create.component.html',
  styleUrls: ['./aulas-lecionadas-create.component.css']
})
export class AulasLecionadasCreateComponent implements OnInit {

  aulasL: AulasLecionadas = {
    id: '',
    dataAula: '',
    bimestre: '', 
    disciplina: '',
    obsAulas:''
  }

  dataAula = new FormControl('', [Validators.nullValidator])
  bimestre = new FormControl('', [Validators.minLength(5)])
  disciplina = new FormControl('', [Validators.minLength(5)])
  obsAulas = new FormControl('', [Validators.minLength(5)])
  
  constructor(
    private router: Router,
    private service: AulasLecionadasService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['aulasLecionadas'])
  }

  
  create(): void {
    this.service.create(this.aulasL).subscribe((resposta) => {
      this.router.navigate(['aulasLecionadas'])
      this.service.message('Aulas Lecionadas adicionadas com sucesso!')
    })
  }

  errorValidDataAula() {
    if (this.dataAula.invalid) {
      return 'Selecione a Data de Nascimento!';
    }
    return false;
  }

   errorValidBimestre() {
    if (this.bimestre.invalid) {
      return 'Bimestre é Obrigatório!';
    }
    return false;
  }

  errorValidDisciplina() {
    if (this.disciplina.invalid) {
      return 'Disciplina é Obrigatório!';
    }
    return false;
  }


  errorValidObsAulas() {
    if (this.obsAulas.invalid) {
      return 'O nome deve ter entre 5 e 1000 caracteres!';
    }
    return false;
  }
}