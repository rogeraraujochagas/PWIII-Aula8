import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
   

  constructor() { }

  ngOnInit() {

  }

  
  nomes : string[] ['Valter','Ronqui','Quiteria','Fatima'];


}
