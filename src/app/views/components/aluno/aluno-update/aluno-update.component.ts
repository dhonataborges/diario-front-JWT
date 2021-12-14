import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements  OnInit {

  id_aluno = ''

  alunos: Aluno = {
    id: '',
    nome: '',
    nascimento: '',
    sexo: '',
    cpf: '',
    rg: '',
    telefone: '',
    endereco: '',
    numero: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
    zona: '',
    matricula: '',
    responsavel: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  sexo = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  rg = new FormControl('', [Validators.minLength(10)])
  telefone = new FormControl('', [Validators.minLength(11)])
  endereco = new FormControl('', [Validators.minLength(5)])
  numero = new FormControl('', [Validators.minLength(5)])
  bairro = new FormControl('', [Validators.minLength(5)])
  cep = new FormControl('', [Validators.minLength(5)])
  cidade = new FormControl('', [Validators.minLength(5)])
  estado = new FormControl('', [Validators.minLength(5)])
  zona = new FormControl('', [Validators.minLength(5)])
  matricula = new FormControl('', [Validators.minLength(5)])
  responsavel = new FormControl('', [Validators.minLength(5)])

  constructor(
    private router: Router,
    private service: AlunoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.id_aluno = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  
  update(): void {
    this.service.update(this.alunos).subscribe((resposta) => {
      this.router.navigate(['alunos'])
      this.service.message('Aluno atualizado com sucesso!')
    }, err => {
      console.log(err)
      if (err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error)
      } else if (err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
        this.service.message("CPF inválido!")
        console.log(err)
      }
    })
  }

  findById(): void {
    this.service.findById(this.id_aluno).subscribe(resposta => {
      this.alunos = resposta;
    })
  }
  
  cancel(): void {
    this.router.navigate(['alunos'])
  }

  errorValidCPF() {
    if (this.cpf.invalid) {
      return 'O CPF deve entre 11 e 15 caracteres!';
    }
    return false;
  }

}