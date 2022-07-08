import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalNavComponent } from './menu-principal-nav/menu-principal-nav.component';
import { FooterPagComponent } from './footer-pag/footer-pag.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalNavComponent,
    FooterPagComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
