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

  aluno: Aluno = {
    id: '',
    nome: '',
    nascimento:'',
    sexo: '',
    cpf: '',
    rg: '',
    responsavel: '',
    telefone: '',
    endereco: '',
    zona: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  nascimento = new FormControl('', [Validators.minLength(5)])
  sexo = new FormControl('', [Validators.minLength(5)])
  rg = new FormControl('', [Validators.minLength(10)])
  responsavel = new FormControl('', [Validators.minLength(5)])
  telefone = new FormControl('', [Validators.minLength(11)])
  endereco = new FormControl('', [Validators.minLength(5)])
  zona = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])

  constructor(
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private service: AlunoService) { }

  ngOnInit(): void {
  this.aluno.id = this.route.snapshot.paramMap.get('id');
  this.findById();
  }

  update(): void {
    this.service.update(this.aluno).subscribe(() => {
      this.toast.success('Aluno atualizado com sucesso!', 'Update');
      this.router.navigate(['alunos']);
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    });
  }
  
  findById(): void {
    this.service.findById(this.aluno.id).subscribe(resposta => {
      this.aluno = resposta;
    })
  }
  
  cancel(): void {
    this.router.navigate(['alunos'])
  }

  validaCampos() {
    return this.nome.valid && this.cpf.valid 
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

  errorValidResponsavel() {
    if (this.responsavel.invalid) {
      return 'Responsavel é obrigatório!';
    }
    return false;
  }

}