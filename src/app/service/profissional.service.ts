import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissional } from '../models/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar ) {}

    findAll():Observable<Profissional[]> {
      const url = this.baseUrl + "/profissionais"
      return this.http.get<Profissional[]>(url);
    }
    
    /** MÉTODO DE BUSCAR UM Professor PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
   * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO CLIENTE*/
  findById(id: any): Observable<Profissional> {
    const url = this.baseUrl + "/profissionais/" + id;
    return this.http.get<Profissional>(url);
  }

   /** MÉTODO PARA CRIAR UM NOVO CLIENTE*/
   create(profissionais: Profissional): Observable<Profissional> {
    const url = this.baseUrl + "/profissionais";
    return this.http.post<Profissional>(url, profissionais);
  }

  /** MÉTODO DE ATUALIZAR CLIENTE */
  update(profissionais: Profissional): Observable<Profissional> {
    const url = this.baseUrl + "/profissionais/" + profissionais.id;
    return this.http.put<Profissional>(url, profissionais);
  }

   /** MÉTODO DE DELETAR CLIENTE */
   delete(id : any):Observable<void> {
    const url = this.baseUrl + "/profissionais/" + id;
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