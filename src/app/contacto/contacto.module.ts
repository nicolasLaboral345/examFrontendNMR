import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';

import { RegistroComponent } from './page/registro/registro.component';
import { ListasComponent } from './page/listas/listas.component';




@NgModule({
  declarations: [
    RegistroComponent,
    ListasComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule
  ]
})
export class ContactoModule { }
