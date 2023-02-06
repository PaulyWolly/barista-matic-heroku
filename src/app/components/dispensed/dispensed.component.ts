import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dispensed',
  templateUrl: './dispensed.component.html',
  styleUrls: ['./dispensed.component.css']
})
export class DispensedComponent implements OnInit {
// @Input() drinkName: any;
// drinkName = new EventEmitter();
drinkName: any = localStorage.getItem('drinkName');

  constructor() { }

  ngOnInit(): void {
  }



}
