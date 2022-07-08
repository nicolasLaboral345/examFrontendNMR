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

  buscarFNombre(str:any){
    if(!this.datos.filtroNombre){
      return false
    }else{
      return str.toLowerCase().indexOf(this.datos.filtroNombre.toLowerCase()) >= 0; 
    }
  }

  buscarFCorreo(str:any){
    if(!this.filtroCorreo){
      return false
    }else{
      return str.toLowerCase().indexOf(this.filtroCorreo.toLowerCase()) >= 0; 
    }
  }
  
  buscarFTelefono(str:any){
    if(!this.filtroTelefono){
      return false
    }else{
      return str.toLowerCase().indexOf(this.filtroTelefono.toLowerCase()) >= 0; 
    }
  }
  
  buscarFFecha(str:any){
    if(!this.filtroFecha){
      return false
    }else{
      return str.toLowerCase().indexOf(this.filtroFecha.toLowerCase()) >= 0; 
    }
  }
  
  onfilter(nom:any,correo:any,tel:any,fecha:any){
    if(!this.filtroCorreo && !this.filtroTelefono && !this.filtroFecha && !this.datos.filtroNombre){
      return true;
    }else{
      if(this.buscarFNombre(nom) || this.buscarFCorreo(correo) || this.buscarFTelefono(tel) || this.buscarFFecha(fecha)){
        return true;
      }else{
        return false;
      }
    }
  }
  


}
