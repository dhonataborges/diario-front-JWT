import { Router } from '@angular/router';
import { AlunoAula } from './../../../../models/alunoAula';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlunoAulaService } from 'src/app/services/alunoAula.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-frequencia-read',
  templateUrl: './frequencia-read.component.html',
  styleUrls: ['./frequencia-read.component.css']
})
export class FrequenciaReadComponent implements AfterViewInit {
  isChecked = true;

  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  frequencia: AlunoAula[] = [];
  displayedColumns: string[] = ['id', 'nomeAluno', 'frequencia'];
  dataSource = new MatTableDataSource<AlunoAula>(this.frequencia);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private _formBuilder: FormBuilder,
    private service : AlunoAulaService,
    private router : Router) {}
    
  ngAfterViewInit() {
          this.findAll();
  }

  navigateTurmaAlunos():void {
    this.router.navigate(['turmaAlunos'])
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.frequencia = resposta;
      this.dataSource = new MatTableDataSource<AlunoAula>(this.frequencia);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['aulaRegistrar/create'])
  }

}
