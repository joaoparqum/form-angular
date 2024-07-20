import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  nota_1: number = 0;
  nota_2: number = 0;
  media: number = 0;

  constructor() { }

  calcularMedia(nota_1: number, nota_2: number) {

    const soma = nota_1 + nota_2;

    const result = soma / 2;
    return result;

  }
}
