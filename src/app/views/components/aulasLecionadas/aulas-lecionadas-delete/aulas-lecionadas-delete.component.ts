import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasLecionadas } from 'src/app/models/aulasLecionadas';
import { AulasLecionadasService } from 'src/app/service/aulas-lecionadas.service';

@Component({
  selector: 'app-aulas-lecionadas-delete',
  templateUrl: './aulas-lecionadas-delete.component.html',
  styleUrls: ['./aulas-lecionadas-delete.component.css']
})
export class AulasLecionadasDeleteComponent implements OnInit {

  id_aula = ''

  aulasL: AulasLecionadas = {
    id: '',
    dataAula: '',
    bimestre: '', 
    disciplina: '',
    obsAulas:''
  }

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

  
  delete(): void {
    this.service.delete(this.id_aula).subscribe((resposta) => {
      this.router.navigate(['aulasLecionadas'])
      this.service.message('Aulas Lecionadas removida com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_aula).subscribe(resposta => {
      this.aulasL = resposta;
    })
  }

}