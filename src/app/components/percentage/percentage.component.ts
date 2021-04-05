import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  porcentagem: number;
  valor: number;
  _result
  constructor() { }

  ngOnInit(): void {
  }

  getResult(){
    let result = (this.valor * this.porcentagem) / 100
    return isNaN(result)?0:result;
  }
}
