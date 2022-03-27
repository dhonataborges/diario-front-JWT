import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-profissional-delete',
  templateUrl: './profissional-delete.component.html',
  styleUrls: ['./profissional-delete.component.css']
})
export class ProfissionalDeleteComponent implements OnInit {
  
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
  
  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: ProfissionalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_prof = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_prof).subscribe(resposta => {
      this.prof = resposta;
    })
  }  
  cancel(): void {
    this.router.navigate(['profissionais'])
  }
  delete(): void {
    this.service.delete(this.prof).subscribe(() => {
      this.toast.success('prof deletado com sucesso!', 'Deletado');
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

}
