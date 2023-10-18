import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos:string[] = []
  menuType:string = "diretor"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "fonte",
      "cabo"
    ]
  }

  adicionar(){
    this.produtos.push("RJ45")
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }

}
