import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasLecionadas } from 'src/app/models/aulasLecionadas';
import { AulasLecionadasService } from 'src/app/services/aulas-lecionadas.service';

@Component({
  selector: 'app-aulas-lecionadas-update',
  templateUrl: './aulas-lecionadas-update.component.html',
  styleUrls: ['./aulas-lecionadas-update.component.css']
})
export class AulasLecionadasUpdateComponent implements OnInit {

  id_aula = ''

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
    private service: AulasLecionadasService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_aula = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  cancel(): void {
    this.router.navigate(['aulasLecionadas'])
  }

  
  update(): void {
    this.service.update(this.aulasL).subscribe((resposta) => {
      this.router.navigate(['aulasLecionadas'])
      this.service.message('Aulas Lecionadas autualizada com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_aula).subscribe(resposta => {
      this.aulasL = resposta;
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