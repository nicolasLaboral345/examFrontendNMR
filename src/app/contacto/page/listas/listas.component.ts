import { Component, OnInit } from '@angular/core';
import { ContactosServService } from 'src/app/contactos-serv.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(public datos: ContactosServService) {
    this.listContactos = this.datos.listContactos
   }

  ngOnInit(): void {
  }

  
  filtroCorreo = "";
  filtroTelefono = "";
  filtroFecha: any;

  
  public listContactos = [
    {
      nombre: "NaN",
      telefono: 0,
      fechaNacimiento: "NaN",
      direccion: "NaN",
      correo: "NaN"
    }
  ]

  


  calcularEdad(fecha: any) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }
  


}
