import { Component, OnInit } from '@angular/core';
import { ContactosServService } from 'src/app/contactos-serv.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private datos: ContactosServService,private router: Router) { }

  ngOnInit(): void {
  }

  public newC = 
    {
      nombre: "",
      telefono: 0,
      fechaNacimiento: "",
      direccion: "",
      correo: ""
    }
  

  guardar(){
    console.log(this.newC)
    this.datos.agregar(this.newC);
    this.router.navigate(['/contacto/lista'])
  }

}
