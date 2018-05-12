import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-horario',
  template: `
    <h1>{{campo_horario_atual | horaFormatada}}</h1>
    <input type='text' [(ngModel)]='nome'/>

    {{nome}}
  `,
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  campo_horario_atual = new Date();
  nome = 'jessica';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.campo_horario_atual = new Date();
    }, 1000);
  }
}