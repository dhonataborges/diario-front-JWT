import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-profissional-updade',
  templateUrl: './profissional-updade.component.html',
  styleUrls: ['./profissional-updade.component.css']
})
export class ProfissionalUpdadeComponent implements  OnInit {
  
  id_prof= '';
  
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

  nome = new FormControl('', [Validators.minLength(5)])
  nascimento = new FormControl('', [Validators.minLength(5)])
  sexo = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(5)])
  rg = new FormControl('', [Validators.minLength(10)])
  telefone = new FormControl('', [Validators.minLength(11)])
  cargo = new FormControl('', [Validators.minLength(5)])
  turma = new FormControl('', [Validators.minLength(5)])
  disciplina = new FormControl('', [Validators.minLength(5)])
  email = new FormControl('', [Validators.required, Validators.email])
  senha = new FormControl('', [Validators.required])

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: ProfissionalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_prof = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['profissionais'])
  }

  
  update(): void {
    this.service.update(this.prof).subscribe(() => {
      this.toast.success('profissional atualizado com sucesso!', 'Atualizado');
      this.router.navigate(['profissional']);
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

  findById(): void {
    this.service.findById(this.id_prof).subscribe(resposta => {
      this.prof = resposta;
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
