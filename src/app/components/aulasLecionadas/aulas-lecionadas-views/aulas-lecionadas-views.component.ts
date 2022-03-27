import { AulasLecionadas } from './../../../models/aulasLecionadas';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AulasLecionadasService } from 'src/app/services/aulas-lecionadas.service';

@Component({
  selector: 'app-aulas-lecionadas-views',
  templateUrl: './aulas-lecionadas-views.component.html',
  styleUrls: ['./aulas-lecionadas-views.component.css']
})
export class AulasLecionadasViewsComponent implements OnInit {

  aulasL: AulasLecionadas = {
    id: '',
    dataAula: '',
    bimestre: '', 
    disciplina: '',
    obsAulas:''
  }

  dataAula = new Date('2021-04-23T10:00:00.000');
  constructor(
    private router: Router,
    private service: AulasLecionadasService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.aulasL.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById(): void {
    this.service.findById(this.aulasL.id).subscribe(resposta => {
      this.aulasL = resposta;
      this.findById();
    })
  }

  voltar(): void {
    this.router.navigate(['aulasLecionadas'])
  }

}