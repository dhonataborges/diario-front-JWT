import { Disciplina } from 'src/app/models/disciplina';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { CargoService } from 'src/app/services/cargo.service';
import { TurmaService } from 'src/app/services/turma.service';
import { Turma } from 'src/app/models/turma';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {

  cursos1: Disciplina[] = [{id: '', nomeDisciplina: '', professores:[]}];

  cargos1: Cargo[] = [{id: '', nomeCargo: '', professores:[] }];

  
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
	  turma: '',
    nomeTurma: '',
    email: '',
    senha: '',
    perfis: []
  }
  
 /* disciplinas: Disciplina[] = [];
  cargos: Cargo[] = [];*/
  turmas: Turma[] = [];

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
  estado = new FormControl('', [Validators.minLength(5)])
  zona = new FormControl('', [Validators.minLength(5)])
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  cargos = this.cargos1;
  disciplinas = this.cursos1;
  
  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: ProfissionalService,
    private serviceDiscip: DisciplinaService,
    private serviceCargo: CargoService,
    private serviceTurma: TurmaService){}
    
  ngOnInit(): void {
    this.listarDisciplinas();
   // this.listarCargos();
    this.listarTurmas();
  }
  listarDisciplinas():void {
    this.serviceDiscip.findAll().subscribe((resposta) => {
      this.disciplinas = resposta;

    })
  }
  listarCargos():void {
    this.serviceCargo.findAll().subscribe((resposta) => {
      this.cargos = resposta;
    })
  }

  listarTurmas():void {
    this.serviceTurma.findAll().subscribe((resposta) => {
      this.turmas = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['profissionais'])
  }
  
  create(): void {
    this.service.create(this.prof).subscribe(() => {
      this.toast.success('Profissional cadastrado com sucesso!', 'Cadastro');
      this.router.navigate(['profissionais']);
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
    if(this.prof.perfis.includes(perfil)) {
      this.prof.perfis.splice(this.prof.perfis.indexOf(perfil), 1);
    } else {
      this.prof.perfis.push(perfil);
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

  /*errorValidCargo() {
    if (this.cargo.invalid) {
      return 'Cargo é obrigatório!';
    }
    return false;
  }*/

 /* errorValidTurma() {
    if (this.turma.invalid) {
      return 'Turma é obrigatório!';
    }
    return false;
  }*/

 /* errorValidDisciplina() {
    if (this.disciplina.invalid) {
      return 'Disciplina é obrigatório!';
    }
    return false;
  }*/
}
