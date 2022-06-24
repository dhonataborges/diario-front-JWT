import { Professor } from 'src/app/models/professor';
import { Aula } from './../../../../models/aula';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AulaService } from 'src/app/services/aula.servic';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-aula-registrar',
  templateUrl: './aula-registrar.component.html',
  styleUrls: ['./aula-registrar.component.css']
})
export class AulaRegistrarComponent implements OnInit {

  aulas: Aula = {
    id: '',
    data: '',
    horaInicio:'',
    horaFim: '',
    conteudo: '',
    professor: '',
    nomeProfessor: ''
  }
 
  profs: Professor[] = [];
  time = {hour: 13, minute: 30};
  horaInicio = `${new Date().getHours()}:${(new Date().getMinutes()<10?'0':'') + new Date().getMinutes()}`;
  date = new Date();
  data = new FormControl('', [Validators.minLength(5)])
  horaFim = new FormControl('', [Validators.minLength(5)])
  conteudo = new FormControl('', [Validators.minLength(10)])
  professor = new FormControl('', [Validators.minLength(5)])
  
  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: AulaService,
    private profService: ProfessorService) { }

  ngOnInit(): void {
    this.listarProf();
  }

  cancel(): void {
    this.router.navigate(['aulas'])
  }

  create(): void {
    this.service.create(this.aulas).subscribe(() => {
      this.toast.success('Aula registrada com sucesso!', 'Registro');
      this.router.navigate(['aulas']);
    }, err => {
      console.log(err)
      if (err.error.error.match('já cadastrado')) {
        this.toast.error(err.error.error)
      } else if (err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
        this.toast.error("CPF inválido!")
        console.log(err)
      }
    })
  }

  listarProf(): void {
    this.profService.findAll().subscribe(resposta => {
      this.profs = resposta;
    })
  }

}