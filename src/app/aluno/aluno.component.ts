import { Component, OnInit } from '@angular/core';
import { IAluno } from '../alunos';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: IAluno[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calcularMedia(nota_1: number, nota_2: number) {

    const soma = nota_1 + nota_2;

    const result = soma / 2;
    return result;

  }

}
