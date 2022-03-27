import { API_CONFIG } from './../config/api.config';
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

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Aluno> {
    return this.http.get<Aluno>(`${API_CONFIG.baseUrl}/alunos/${id}`);
  }

  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${API_CONFIG.baseUrl}/alunos`);
  }

  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${API_CONFIG.baseUrl}/alunos`, aluno);
  }

  update(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${API_CONFIG.baseUrl}/alunos/${aluno.id}`, aluno);
  }

  delete(id: any): Observable<Aluno> {
    return this.http.delete<Aluno>(`${API_CONFIG.baseUrl}/alunos/${id}`);
  }
}