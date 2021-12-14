import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observacoes } from 'src/app/models/observacoes';
import { ObservacoesService } from 'src/app/service/observacoes.service';

@Component({
  selector: 'app-observacoes-delete',
  templateUrl: './observacoes-delete.component.html',
  styleUrls: ['./observacoes-delete.component.css']
})
export class ObservacoesDeleteComponent implements OnInit {

  id_Obs = ''

  obs: Observacoes = {
    id: '',
    dataObs: '',
    campoObs: ''
  }

  dataObs = new FormControl('', [Validators.minLength(5)])
  campoObs = new FormControl('', [Validators.minLength(5)])
  
  constructor(
    private router: Router,
    private service: ObservacoesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.id_Obs = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  
  findById(): void {
    this.service.findById(this.id_Obs).subscribe(resposta => {
      this.obs = resposta;
    })
  }
  
  delete(): void {
    this.service.delete(this.id_Obs).subscribe((resposta) => {
      this.router.navigate(['observacoes'])
      this.service.message('Observações removido com sucesso!')
    })
  }
  
  cancel(): void {
    this.router.navigate(['observacoes'])
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