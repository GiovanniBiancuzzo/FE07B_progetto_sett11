import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  template: `

  y<h1 class="text-align-center">Dettagli prodotto</h1>
    <div class="container">
      <app-card></app-card>
    </div>

  `,
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
