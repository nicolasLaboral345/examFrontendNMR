import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosServService {

  constructor() { }

  public listContactos = [
    {
      nombre: "paula rodrigues",
      telefono: 321568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example1@gmail.com"
    },
    {
      nombre: "camilo",
      telefono: 322568234,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example3@gmail.com"
    },
    {
      nombre: "daniela bustamente quesada",
      telefono: 300568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example2@gmail.com"
    },
    {
      nombre: "paula antonia",
      telefono: 321568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example1@gmail.com"
    },
    {
      nombre: "camila dias",
      telefono: 322568234,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example3@gmail.com"
    },
    {
      nombre: "daniela quesada",
      telefono: 300568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example2@gmail.com"
    },
    {
      nombre: "daniela bustamente quesada hija",
      telefono: 300568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example2@gmail.com"
    },
    {
      nombre: "paula antonia hija",
      telefono: 321568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example1@gmail.com"
    },
    {
      nombre: "camila dias hija",
      telefono: 322568234,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example3@gmail.com"
    },
    {
      nombre: "daniela quesada hija",
      telefono: 300568943,
      fechaNacimiento: "1998-07-19",
      direccion: "cra 12a # 167 - 91",
      correo: "example2@gmail.com"
    },
    
  ]

  public filtroNombre = ""

  agregar(nuevo:any) {
    this.listContactos.push(nuevo);
  }
}
