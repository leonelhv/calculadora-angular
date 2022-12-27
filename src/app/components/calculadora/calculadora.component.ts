import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  operadores: string[] = ['*', '/', '-', '+'];
  displayNumber: string = '0';
  operador: string = '';
  datos: string = '';

  botones: string[] = [
    '9',
    '8',
    '7',
    '6',
    '4',
    '5',
    '3',
    '2',
    '1',
    '+',
    '0',
    '.',
    '-',
    '*',
    '/',
    '<-',
    '=',
  ];

  displayPress(value: string) {
    if (this.displayNumber === '0') this.displayNumber = '';
    if (this.validarButton(value) === false) return;
    this.displayNumber = this.datos + value;
    this.datos = this.displayNumber;
  }

  validarButton(value: string): boolean {
    const ultimoDato = this.datos.toString().slice(-1);

    if (ultimoDato === value && this.operadores.includes(value)) {
      this.datos = this.datos.toString().slice(0, -1);
      this.displayNumber = this.datos;
      return false;
    }

    switch (value) {
      case '<-':
        this.displayNumber = this.displayNumber.toString().slice(0, -1);
        this.datos = this.displayNumber;

        return false;
      case '=':
        this.datos = eval(this.datos);
        this.displayNumber = this.datos;
        return false;
      default:
        return true;
    }
  }
}
