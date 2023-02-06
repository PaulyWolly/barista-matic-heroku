import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';
import { DrinkInterface } from 'src/app/types/drink.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  drinks: DrinkInterface[] = [];
  // @Output() getDrinks

  constructor(
    private http: HttpClient,
    private drinkService: DrinkService
  ) { }

  ngOnInit(): void {
  }

  getDrinksFromService() {
    this.drinkService.getDrinks()
      .subscribe((drinks:DrinkInterface[]) => {
        this.drinks = drinks;
      });
  }
}
