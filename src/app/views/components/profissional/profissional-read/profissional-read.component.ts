import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-read',
  templateUrl: './profissional-read.component.html',
  styleUrls: ['./profissional-read.component.css']
})
export class ProfissionalReadComponent implements AfterViewInit {

profissionais: Profissional[] = [];

  displayedColumns: string[] = ['id', 'nome', 'nascimento', 'sexo', 'cpf', 'rg', 'telefone', 'endereco',
   'numero', 'bairro', 'cep', 'cidade', 'estado', 'zona', 'cargo', 'turma', 'disciplina', 'email', 'senha', 'action'];
  dataSource = new MatTableDataSource<Profissional>(this.profissionais);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : ProfissionalService,
    private router : Router) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.profissionais = resposta;
      this.dataSource = new MatTableDataSource<Profissional>(this.profissionais);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['profissionais/create'])
  }

}