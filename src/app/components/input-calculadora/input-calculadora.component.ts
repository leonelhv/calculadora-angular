import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-calculadora',
  templateUrl: './input-calculadora.component.html',
  styleUrls: ['./input-calculadora.component.css'],
})
export class InputCalculadoraComponent {
  @Input() displayNumber!: string;
}
