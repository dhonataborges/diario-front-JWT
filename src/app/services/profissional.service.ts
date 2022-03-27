import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_CONFIG } from '../config/api.config';
import { Profissional } from '../models/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Profissional> {
    return this.http.get<Profissional>(`${API_CONFIG.baseUrl}/profissionais/${id}`);
  }

  findAll(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${API_CONFIG.baseUrl}/profissionais`);
  }

  create(prof: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(`${API_CONFIG.baseUrl}/profissionais`, prof);
  }

  update(prof: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(`${API_CONFIG.baseUrl}/profissionais/${prof.id}`, prof);
  }

  delete(id: any): Observable<Profissional> {
    return this.http.delete<Profissional>(`${API_CONFIG.baseUrl}/profissionais/${id}`);
  }
}