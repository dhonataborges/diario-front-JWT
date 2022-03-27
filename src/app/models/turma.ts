import { Aluno } from './aluno';
import { Profissional } from 'src/app/models/profissional';
export interface Turma {
    id?: any;
    nomeTurma: String;
    professor: any;
    aluno: any;
    nomeProfessor: String;
    nomeAluno: String;
}