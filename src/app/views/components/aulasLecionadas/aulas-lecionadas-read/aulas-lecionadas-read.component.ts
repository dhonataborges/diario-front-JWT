import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AulasLecionadas } from 'src/app/models/aulasLecionadas';
import { AulasLecionadasService } from 'src/app/service/aulas-lecionadas.service';

@Component({
  selector: 'app-aulas-lecionadas-read',
  templateUrl: './aulas-lecionadas-read.component.html',
  styleUrls: ['./aulas-lecionadas-read.component.css']
})
export class AulasLecionadasReadComponent implements AfterViewInit {

  aulasLecionadas: AulasLecionadas[] = [];

  displayedColumns: string[] = ['id', 'dataAula', 'bimestre', 'disciplina', 'obsAulas', 'action'];
  dataSource = new MatTableDataSource<AulasLecionadas>(this.aulasLecionadas);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : AulasLecionadasService,
    private router : Router) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.aulasLecionadas = resposta;
      this.dataSource = new MatTableDataSource<AulasLecionadas>(this.aulasLecionadas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['aulasLecionadas/create'])
  }

}

