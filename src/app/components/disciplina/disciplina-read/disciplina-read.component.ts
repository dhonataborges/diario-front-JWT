import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina } from 'src/app/models/disciplina';

@Component({
  selector: 'app-disciplina-read',
  templateUrl: './disciplina-read.component.html',
  styleUrls: ['./disciplina-read.component.css']
})
export class DisciplinaReadComponent implements AfterViewInit {

  disciplinas: Disciplina[] = [];

  displayedColumns: string[] = ['id', 'nomeDisciplina', 'professor', 'action'];
  dataSource = new MatTableDataSource<Disciplina>(this.disciplinas);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : DisciplinaService,
    private router : Router) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.disciplinas = resposta;
      this.dataSource = new MatTableDataSource<Disciplina>(this.disciplinas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['disciplinas/create'])
  }

}

