import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observacoes } from 'src/app/models/observacoes';
import { ObservacoesService } from 'src/app/services/observacoes.service';

@Component({
  selector: 'app-observacoes-read',
  templateUrl: './observacoes-read.component.html',
  styleUrls: ['./observacoes-read.component.css']
})
export class ObservacoesReadComponent implements AfterViewInit {

  observacoes: Observacoes[] = [];

  displayedColumns: string[] = ['id', 'dataObs', 'campoObs', 'action'];
  dataSource = new MatTableDataSource<Observacoes>(this.observacoes);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : ObservacoesService,
    private router : Router) {}
  
  ngAfterViewInit() {
          this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.observacoes = resposta;
      this.dataSource = new MatTableDataSource<Observacoes>(this.observacoes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['observacoes/create'])
  }

}

