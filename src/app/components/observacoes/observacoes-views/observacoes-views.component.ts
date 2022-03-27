import { Observacoes } from './../../../models/observacoes';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ObservacoesService } from 'src/app/services/observacoes.service';

@Component({
  selector: 'app-observacoes-views',
  templateUrl: './observacoes-views.component.html',
  styleUrls: ['./observacoes-views.component.css']
})
export class ObservacoesViewsComponent implements OnInit {

  obs: Observacoes = {
    id: '',
    dataObs: '',
    campoObs: ''
  }
  
  constructor(
    private router: Router,
    private service: ObservacoesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.obs.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  
  findById(): void {
   this.service.findById(this.obs.id).subscribe(resposta => {
      this.obs = resposta;
      this.findById();
    })
  }
  
  
  
  voltar(): void {
    this.router.navigate(['observacoes'])
  }
  
}