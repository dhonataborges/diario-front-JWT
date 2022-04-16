import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from './../../../services/turma.service';
import { Turma } from './../../../models/turma';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-turma-povoada',
  templateUrl: './turma-povoada.component.html',
  styleUrls: ['./turma-povoada.component.css']
})
export class TurmaPovoadaComponent implements OnInit {

  povoada: Turma = {
    codTurma: '',
    nomeTurma: '',
    turno: '',
    anoCriacao: '',
    professor: '',
    nomeProfessor: ''
  }

  turma: Turma[] = [];
  displayedColumns: string[] = [
    'id',
    'nomeTurma',
    'professor',
    'dataIngresso',
    'action'
  ];
  dataSource = new MatTableDataSource<Turma>(this.turma);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   

  constructor(
    private router: Router,
    private service: TurmaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.povoada.id = this.route.snapshot.paramMap.get('id');
    this.findById2();
    this.findById3();
  }

  findById2(): void {
    this.service.findById(this.povoada.id).subscribe(resposta => {
       this.povoada = resposta;
       this.findById2();
     })
   }

   findById3(): void {
    this.service.findById(this.povoada.id).subscribe(resposta => {
       this.povoada = resposta;
       this.findById3();
     })
   }

}
