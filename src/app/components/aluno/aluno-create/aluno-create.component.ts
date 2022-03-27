import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
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
    email: '',
    senha: '',
    perfis: []

  }

  nome = new FormControl('', [Validators.minLength(5)])
  nascimento = new FormControl('', [Validators.minLength(5)])
  sexo = new FormControl('', [Validators.minLength(5)])
  rg = new FormControl('', [Validators.minLength(10)])
  telefone = new FormControl('', [Validators.minLength(11)])
  endereco = new FormControl('', [Validators.minLength(5)])
  numero = new FormControl('', [Validators.minLength(1)])
  bairro = new FormControl('', [Validators.minLength(5)])
  cep = new FormControl('', [Validators.minLength(5)])
  cidade = new FormControl('', [Validators.minLength(5)])
  estado = new FormControl('', [Validators.minLength(3)])
  zona = new FormControl('', [Validators.minLength(5)])
  matricula = new FormControl('', [Validators.minLength(1)])
  responsavel = new FormControl('', [Validators.minLength(5)])
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));


  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: AlunoService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

  create(): void {
    this.service.create(this.aluno).subscribe(() => {
      this.toast.success('Aluno cadastrado com sucesso!', 'Cadastro');
      this.router.navigate(['alunos']);
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    });
  }

  addPerfil(perfil: any): void {
    if(this.aluno.perfis.includes(perfil)) {
      this.aluno.perfis.splice(this.aluno.perfis.indexOf(perfil), 1);
    } else {
      this.aluno.perfis.push(perfil);
    }
  }

  validaCampos() {
    return this.nome.valid && this.cpf.valid 
      && this.email.valid && this.senha.valid
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

  errorValidMatricula() {
    if (this.matricula.invalid) {
      return 'Matrícula é obrigatório!';
    }
    return false;
  }

  errorValidResponsavel() {
    if (this.responsavel.invalid) {
      return 'Responsavel é obrigatório!';
    }
    return false;
  }

}