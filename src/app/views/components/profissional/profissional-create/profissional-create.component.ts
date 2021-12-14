import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {

  prof: Profissional = {
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
    cargo: '',
    turma: '',
    disciplina: '',
    email: '',
    senha: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  nascimento = new FormControl('', [Validators.minLength(5)])
  sexo = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(5)])
  rg = new FormControl('', [Validators.minLength(10)])
  telefone = new FormControl('', [Validators.minLength(11)])
  endereco = new FormControl('', [Validators.minLength(5)])
  numero = new FormControl('', [Validators.minLength(1)])
  bairro = new FormControl('', [Validators.minLength(5)])
  cep = new FormControl('', [Validators.minLength(5)])
  cidade = new FormControl('', [Validators.minLength(5)])
  estado = new FormControl('', [Validators.minLength(5)])
  zona = new FormControl('', [Validators.minLength(5)])
  cargo = new FormControl('', [Validators.minLength(5)])
  turma = new FormControl('', [Validators.minLength(5)])
  disciplina = new FormControl('', [Validators.minLength(5)])
  email = new FormControl('', [Validators.required, Validators.email])
  senha = new FormControl('', [Validators.required])

  constructor(
    private router: Router,
    private service: ProfissionalService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['profissionais'])
  }

  
  create(): void {
    this.service.create(this.prof).subscribe((resposta) => {
      this.router.navigate(['profissionais'])
      this.service.message('Profissional criado com sucesso!')
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

  errorValidNome() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  errorValidNascimento() {
    if (this.nascimento.invalid) {
      return 'Selecione a Data de Nascimento!';
    }
    return false;
  }

  errorValidSexo() {
    if (this.sexo.invalid) {
      return 'Selecione o genero do aluno!';
    }
    return false;
  }

  errorValidCPF() {
    if (this.cpf.invalid) {
      return 'O CPF deve entre 11 e 15 caracteres!';
    }
    return false;
  }

  errorValidRG(){
    if (this.rg.invalid) {
      return 'O RG é obrigatório!';
    }
    return false;
  }

  errorValidTelefone() {
    if (this.telefone.invalid) {
      return 'O Telefone deve ter entre 11 e 18 caracteres!';
    }
    return false;
  }

  errorValidEndereco() {
    if (this.endereco.invalid) {
      return 'Endereço é obrigatório!';
    }
    return false;
  }

  errorValidNumero() {
    if (this.numero.invalid) {
      return 'Número é obrigatório!';
    }
    return false;
  }

  errorValidBairro() {
    if (this.bairro.invalid) {
      return 'Bairro é obrigatório!';
    }
    return false;
  }

  errorValidCep() {
    if (this.cep.invalid) {
      return 'Adicione um Cep valido!';
    }
    return false;
  }

  errorValidCidade() {
    if (this.cidade.invalid) {
      return 'Cidade é obrigatório!';
    }
    return false;
  }

  errorValidEstado() {
    if (this.estado.invalid) {
      return 'Estado é obrigatório!';
    }
    return false;
  }

  errorValidZona() {
    if (this.zona.invalid) {
      return 'Estado é obrigatório!';
    }
    return false;
  }

  errorValidCargo() {
    if (this.cargo.invalid) {
      return 'Cargo é obrigatório!';
    }
    return false;
  }

  errorValidTurma() {
    if (this.turma.invalid) {
      return 'Turma é obrigatório!';
    }
    return false;
  }

  errorValidDisciplina() {
    if (this.disciplina.invalid) {
      return 'Disciplina é obrigatório!';
    }
    return false;
  }

  errorValidEmail() {
    if (this.email.invalid) {
      return 'E-mail é obrigatório!';
    }
    return false;
  }

  errorValidSenha(){
    if (this.senha.invalid) {
      return 'Senha é obrigatório!';
    }
    return false;
  }

}
