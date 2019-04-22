import { MultiplicarAction, DividirAction } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  multiplicar() {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }
  dividir() {
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }
  reinicioNieto(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
