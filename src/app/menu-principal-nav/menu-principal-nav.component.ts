import { Component, OnInit } from '@angular/core';
import { ContactosServService } from '../contactos-serv.service';

@Component({
  selector: 'app-menu-principal-nav',
  templateUrl: './menu-principal-nav.component.html',
  styleUrls: ['./menu-principal-nav.component.css']
})
export class MenuPrincipalNavComponent implements OnInit {

  constructor(public dato: ContactosServService) { }

  ngOnInit(): void {
  }

}
