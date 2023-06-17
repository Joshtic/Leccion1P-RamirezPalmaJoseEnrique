import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  nombre = "";
  apellido="";
  cedula="";
  edad="";
  fecha= new Date();
  listEstudiante: Estudiante[] = [];
  listEliminados: Estudiante[] = [];
  ngOnInit(): void {

  }
  constructor(private router: Router) { }

  agregarEstudiante():void {
    const estudiante: Estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      estado: false,
      fecha: this.fecha,
      edad:this.edad
    }

    this.listEstudiante.push(estudiante);

    this.nombre='';
    this.apellido='';
    this.cedula='';
    this.edad='';
    this.fecha= new Date();

  }
  
  
  eliminarEstudiante(indice:number):void{
    const estudianteEliminado = this.listEstudiante.splice(indice, 1)[0];
    this.listEliminados.push(estudianteEliminado);
    this.listEstudiante.splice(indice,1);

  }

  actualizarEstudiante(estudiante:Estudiante, indice:number){
    console.log(estudiante);
    this.listEstudiante[indice].estado=!estudiante.estado;

  }
}
