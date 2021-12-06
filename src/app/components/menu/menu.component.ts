import { Component, OnInit } from '@angular/core';

@Component({
  //Etiqueta con la cual las vistas podrán traerlo
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas=[
    {
      //Asigna un nombre y direccion es decir path hacia donde redirigirs
      name:'Home',
      path:'/home'
    },
    {
      name:'Contact',
      path:'/contact'
    },
    {
      name:'About',
      path:'/about'
    },
    {
      name:'Posts',
      path:'/posts'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
