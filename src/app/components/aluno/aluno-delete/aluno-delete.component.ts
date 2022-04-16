import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  id_aluno = ''

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

  constructor(
    private service: AlunoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.aluno.id).subscribe(resposta => {
      this.aluno = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.aluno.id).subscribe(() => {
      this.toast.success('aluno deletato com sucesso!', 'Delete');
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

  voltar(): void {
    this.router.navigate(['alunos'])
  }

}  