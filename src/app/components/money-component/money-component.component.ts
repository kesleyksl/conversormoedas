import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoneyServiceService } from 'src/app/services/money-service.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-money-component',
  templateUrl: './money-component.component.html',
  styleUrls: ['./money-component.component.css']
})
export class MoneyComponentComponent implements OnInit {

  private money: any;

  public reais: any;
  public dolares: any;
  public euros: any;

  @ViewChild('real') inputReal: ElementRef;
  @ViewChild('dolar') inputDolar: ElementRef;
  @ViewChild('euro') inputEuro: ElementRef;

  constructor(private moneyService: MoneyServiceService) { }

  ngOnInit(): void {
    this.moneyService.getMoneyValue().subscribe(
      money=> {
        this.money = money;
        
      },
      erro=> console.log(erro)
    );
    
  }

  ngAfterViewInit(){
    this.changeMoneyValue();
  }

  calculate(value: number, referencia: string){
    if(!value || value === 0 || isNaN(value)) {
      this.reais ="";
      this.euros ="";
      this.dolares="";
    } 
    else if(referencia === "BRL"){
        this.dolares = (value/this.money.USD.high).toFixed(2);
        this.euros = (value/this.money.EUR.high).toFixed(2);
      }
      else if(referencia === "USD"){
        this.reais = (value* this.money.USD.high).toFixed(2);
        this.euros = (value*this.money.USD.high /this.money.EUR.high).toFixed(2);
      }
      else if(referencia === "EUR"){
        this.dolares = (value* this.money.EUR.high/this.money.USD.high).toFixed(2);
        this.reais = (value*this.money.EUR.high).toFixed(2);
      }
      return
  }

  changeMoneyValue(){
    fromEvent(this.inputReal.nativeElement, "keyup").subscribe(
      e=> {this.calculate(this.reais, "BRL");}
    );
    fromEvent(this.inputDolar.nativeElement, "keyup").subscribe(
      e=> {this.calculate(this.dolares, "USD"); }
    );
    fromEvent(this.inputEuro.nativeElement, "keyup").subscribe(
      e=> {this.calculate(this.euros, "EUR");  }
    )

  }

}
