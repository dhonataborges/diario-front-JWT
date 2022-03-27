import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements  OnInit {

  id_aluno = ''

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
  sexo = new FormControl('', [Validators.minLength(5)])
  rg = new FormControl('', [Validators.minLength(10)])
  telefone = new FormControl('', [Validators.minLength(11)])
  endereco = new FormControl('', [Validators.minLength(5)])
  numero = new FormControl('', [Validators.minLength(5)])
  bairro = new FormControl('', [Validators.minLength(5)])
  cep = new FormControl('', [Validators.minLength(5)])
  cidade = new FormControl('', [Validators.minLength(5)])
  estado = new FormControl('', [Validators.minLength(5)])
  zona = new FormControl('', [Validators.minLength(5)])
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: AlunoService) { }

  ngOnInit(): void {
  }

  update(): void {
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

  findById(): void {
    this.service.findById(this.id_aluno).subscribe(resposta => {
      this.aluno = resposta;
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