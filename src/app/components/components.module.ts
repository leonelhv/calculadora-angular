import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CalculadoraComponent
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
