import { ProfessorTurma } from 'src/app/models/professorTurma';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProfessorTurmaService } from 'src/app/services/professorTurma.service ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emturma-read',
  templateUrl: './emturma-read.component.html',
  styleUrls: ['./emturma-read.component.css']
})
export class EmturmaReadComponent implements  AfterViewInit {

  enturma: ProfessorTurma[] = [];

  displayedColumns: string[] = ['id', 'nomeProfessor', 'descricaoTurma', 'dataAtribuicao', 'status','action' ];
  dataSource = new MatTableDataSource<ProfessorTurma>(this.enturma);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : ProfessorTurmaService,
    private router : Router) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.enturma = resposta;
      this.dataSource = new MatTableDataSource<ProfessorTurma>(this.enturma);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['entrumacao/create'])
  }

  navigateToDisciplina():void {
    this.router.navigate(['disciplinaProfessor'])
  }

}

