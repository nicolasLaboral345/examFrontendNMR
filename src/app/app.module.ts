import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalNavComponent } from './menu-principal-nav/menu-principal-nav.component';
import { FooterPagComponent } from './footer-pag/footer-pag.component';
import { ContactosServService } from './contactos-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalNavComponent,
    FooterPagComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ContactosServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
