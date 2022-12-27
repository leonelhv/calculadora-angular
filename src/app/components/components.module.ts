import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InputCalculadoraComponent } from './input-calculadora/input-calculadora.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CalculadoraComponent,
    InputCalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    CalculadoraComponent
  ]
})
export class ComponentsModule { }
