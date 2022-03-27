import { ProfissionalService } from 'src/app/services/profissional.service';
import { Profissional } from 'src/app/models/profissional';
import { Disciplina } from './../../../models/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-read',
  templateUrl: './profissional-read.component.html',
  styleUrls: ['./profissional-read.component.css']
})
export class ProfissionalReadComponent implements AfterViewInit {

profissionais: Profissional[] = [];

  displayedColumns: string[] = ['nome', 'nascimento', 'sexo', 'cpf', 'rg', 'telefone','cargos', 'turmas', 'disciplinas', 'action'];
  dataSource = new MatTableDataSource<Profissional>(this.profissionais);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : ProfissionalService,
    private router : Router,
    private disciplinaService: DisciplinaService) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
     // this.listarDisciplina();
      this.profissionais = resposta;
      this.dataSource = new MatTableDataSource<Profissional>(this.profissionais);
      this.dataSource.paginator = this.paginator;

    })
  }

  navigateToCreate():void {
    this.router.navigate(['profissionais/create'])
  }

   /** O METODO listarCliente FAZ COM QUE APAREÇA O NOME DO CLIENTE NA COLUNA CLIENTE DA TABELA AO IVÉS DO ID. */
   /*listarDisciplina(): void {
    this.profissionais.forEach(x => {
      this.disciplinaService.findById(x.disciplinas).subscribe(resposta => {
        x.disciplinas = resposta.nomeDisciplina
      })
    }

    )
  }*/

}