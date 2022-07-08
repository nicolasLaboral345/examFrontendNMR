import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './page/listas/listas.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "nuevo", component: RegistroComponent},
      { path: "lista", component: ListasComponent},
      { path: "**", redirectTo: "lista"}

    ]

  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ContactosRoutingModule { }
