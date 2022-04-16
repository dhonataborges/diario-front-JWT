import { Aluno } from './aluno';
import { Professor } from 'src/app/models/professor';
export interface Turma {
    id?: any;
    codTurma: String;
    nomeTurma: String;
    turno: String;
    anoCriacao: String;
    professor: any;
    nomeProfessor: String;
}