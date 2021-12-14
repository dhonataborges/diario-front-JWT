import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  id_aluno = ''

  alunos: Aluno = {
    id: '',
    nome: '',
    nascimento:'',
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

  findById(): void {
    this.service.findById(this.id_aluno).subscribe(resposta => {
      this.alunos = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_aluno).subscribe(resposta => {
      this.router.navigate(['alunos'])
      this.service.message('Aluno deletado com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }


  /*errorValidNome() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }*/

  errorValidCPF() {
    if (this.cpf.invalid) {
      return 'O CPF deve entre 11 e 15 caracteres!';
    }
    return false;
  }
/*
  errorValidTelefone() {
    if (this.nome.invalid) {
      return 'O Telefone deve ter entre 11 e 18 caracteres!';
    }
    return false;
  }
*/
}