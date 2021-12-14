import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar ) {}

    findAll():Observable<Aluno[]> {
      const url = this.baseUrl + "/alunos"
      return this.http.get<Aluno[]>(url);
    }

    /** MÉTODO DE BUSCAR UM Aluno PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
   * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO CLIENTE*/
  findById(id: any): Observable<Aluno> {
    const url = this.baseUrl + "/alunos/" + id;
    return this.http.get<Aluno>(url);
  }

   /** MÉTODO PARA CRIAR UM NOVO CLIENTE*/
   create(alunos: Aluno): Observable<Aluno> {
    const url = this.baseUrl + "/alunos";
    return this.http.post<Aluno>(url, alunos);
  }

  /** MÉTODO DE ATUALIZAR CLIENTE */
  update(alunos: Aluno): Observable<Aluno> {
    const url = this.baseUrl + "/alunos/" + alunos.id;
    return this.http.put<Aluno>(url, alunos);
  }

   /** MÉTODO DE DELETAR CLIENTE */
   delete(id : any):Observable<void> {
    const url = this.baseUrl + "/alunos/" + id;
    return this.http.delete<void>(url);
  }


  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

}
}