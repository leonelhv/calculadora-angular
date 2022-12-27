import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  displayNumber: string = '1213';
  datos: string = '';

  botones: string[] = [
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '.',
    '*',
    '/',
    '<-',
    '=',
  ];

  displayPress(value: string) {
    if (!this.validarButton(value)) return;
    this.displayNumber = this.displayNumber + value;
  }

  validarButton(value: string): boolean {
    switch (value) {
      case '<-':
        this.displayNumber = this.displayNumber.slice(0, -1);
        return false;
      default:
        return true;
    }
  }
}
