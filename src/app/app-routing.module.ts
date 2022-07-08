import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';


const routes: Routes = [
  { 
    path: "contacto", 
    loadChildren: ()=> import("./contacto/contacto.module").then(m => m.ContactoModule)
  },
  { 
    path: "**", 
    redirectTo: "contacto"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

