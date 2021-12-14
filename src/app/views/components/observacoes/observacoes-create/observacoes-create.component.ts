import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observacoes } from 'src/app/models/observacoes';
import { ObservacoesService } from 'src/app/service/observacoes.service';

@Component({
  selector: 'app-observacoes-create',
  templateUrl: './observacoes-create.component.html',
  styleUrls: ['./observacoes-create.component.css']
})
export class ObservacoesCreateComponent implements OnInit {

  obs: Observacoes = {
    id: '',
    dataObs: '',
    campoObs:''
  }

  dataObs = new FormControl('', [Validators.nullValidator])
  campoObs = new FormControl('', [Validators.minLength(5)])
  
  constructor(
    private router: Router,
    private service: ObservacoesService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['observacoes'])
  }

  
  create(): void {
    this.service.create(this.obs).subscribe((resposta) => {
      this.router.navigate(['observacoes'])
      this.service.message('Observacoes adicionadas com sucesso!')
    })
  }

  errorValidDataObs() {
    if (this.dataObs.invalid) {
      return 'Selecione a Data de Nascimento!';
    }
    return false;
  }

  errorValidCampoObs() {
    if (this.campoObs.invalid) {
      return 'O nome deve ter entre 5 e 1000 caracteres!';
    }
    return false;
  }

}