import { Component, OnInit } from '@angular/core';
import { IAluno } from '../alunos';

interface Aluno {
  nome: string;
  primeiraNota: number;
  segundaNota: number;
}

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  novoAluno: Aluno = {nome: "", primeiraNota: 0, segundaNota: 0};
  editIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarAluno() {
    if(this.editIndex !== null){
      this.alunos[this.editIndex] = {...this.novoAluno};
      this.editIndex = null;
    } else {
      this.alunos.push({...this.novoAluno });
    }
    this.novoAluno = {nome: "", primeiraNota: 0, segundaNota: 0};
  }

  editarAluno(indice: number) {
    this.novoAluno = {...this.alunos[indice]};
    this.editIndex = indice;
  }

  excluirAluno(indice: number) {
    this.alunos.splice(indice, 1);
  }

  calcularMedia(aluno: Aluno): number{
    return (aluno.primeiraNota + aluno.segundaNota) / 2;
  }

  calcularCondicao(aluno: Aluno): string {
    return this.calcularMedia(aluno) >= 6 ? "Aprovado" : "Reprovado";
  }

}
