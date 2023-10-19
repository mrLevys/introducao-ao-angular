import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo:string = 'enable'
  corFundo:string = 'red'
  corDaFont:string = 'white'
  item:string = ''
  lista:string[] = []
  isEnableBlock:boolean = true

  constructor(){ }

  adicionarLista (){
    this.lista.push(this.item)
  }

  trocar() {
    if(this.estilo == "disable") {
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
