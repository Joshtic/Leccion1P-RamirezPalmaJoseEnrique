import { Component } from '@angular/core';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
    }
  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
