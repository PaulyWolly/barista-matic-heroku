import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItemInterface } from 'src/app/types/inventoryItem.interface';
import { DrinkService } from '../../services/drink.service';
import { DrinkInterface } from 'src/app/types/drink.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  [x: string]: any;
  drinkName: any;
  drinks: DrinkInterface[] = [];
  inventoryItems: InventoryItemInterface[] = [];

  //form payload
  formPayload: InventoryItemInterface = {
    id: 0,
    name: '',
    unitsOnHand: 0
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private route: Router,
    private drinkService: DrinkService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onCreateDrink(drink: any) {
    // get the drink name and store in locaStorage
    localStorage.setItem('drinkName', drink);
    // Check to see if we are getting a value for 'drinkName' from locaStorage
    console.log("drinkName from localStorage: ", localStorage.getItem('drinkName'));
    // open 'dispensed message' for user
    this.route.navigate(['/dispensed']);

    const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'


    // handle edits to inventory units
    switch(drink) {
      case 'Coffee': {
        //statements;
        console.log("switch value: Coffee")

        // Recipe items
        // Id for Coffee: 1 (3)
        // Id for Sugar: 3 (1)
        // Id for Cream: 4 (1)

        // get value as string and store in const
        const currentItemCountAsString = localStorage.getItem('currentCoffeeItemCount');

        // update content



        // Get Item counts: Coffee
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/1')
          .subscribe((res) => {
            console.log('currentCoffeeItemCount: ', res.unitsOnHand)

            const newCoffeeItemCount = res.unitsOnHand - 3;
            console.log('newCoffeeItemCount: ', newCoffeeItemCount)

            // Coffee ingredient update
            const drinkBody1 = { id: 1, name: 'Coffee', unitsOnHand: newCoffeeItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/1', drinkBody1)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Sugar
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/3')
          .subscribe((res) => {
            console.log('currentSugarItemCount: ', res.unitsOnHand)

            const newSugarItemCount = res.unitsOnHand - 1;
            console.log('newSugarItemCount: ', newSugarItemCount)

            // Sugar ingredient update
            const drinkBody2 = { id: 3, name: 'Sugar', unitsOnHand: newSugarItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/3', drinkBody2)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Cream
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/4')
          .subscribe((res) => {
            console.log('currentCreamItemCount: ', res.unitsOnHand)

            const newCreamItemCount = res.unitsOnHand - 1;
            console.log('newCreamItemCount: ', newCreamItemCount)

            // Cream ingredient update
            const drinkBody3 = { id: 4, name: 'Cream', unitsOnHand: newCreamItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/4', drinkBody3)
              .subscribe(data => this.postId = data.id);

          });


        break;
      }
      case 'Decaf Coffee': {

        console.log("switch value: Decaf coffee")

        // Recipe items
        // Id for Decaf Coffee: 2 (3)
        // Id for Sugar: 3 (1)
        // Id for Cream: 4 (1)

        // Get Item counts: Decaf Coffee
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/2')
          .subscribe((res) => {
            console.log('currentDecafCoffeeItemCount: ', res.unitsOnHand)

            const newDecafCoffeeItemCount = res.unitsOnHand - 3;
            console.log('newDecafCoffeeItemCount: ', newDecafCoffeeItemCount)

            // Decaf Coffee ingredient update
            const drinkBody4 = { id: 2, name: 'Decaf Coffee', unitsOnHand: newDecafCoffeeItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/2', drinkBody4)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Sugar
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/3')
          .subscribe((res) => {
            console.log('currentSugarItemCount: ', res.unitsOnHand)

            const newSugarItemCount = res.unitsOnHand - 1;
            console.log('newSugarItemCount: ', newSugarItemCount)

            // Sugar ingredient update
            const drinkBody5 = { id: 3, name: 'Sugar', unitsOnHand: newSugarItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/3', drinkBody5)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Cream
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/4')
          .subscribe((res) => {
            console.log('currentCreamItemCount: ', res.unitsOnHand)

            const newCreamItemCount = res.unitsOnHand - 1;
            console.log('newCreamItemCount: ', newCreamItemCount)

            // Cream ingredient update
            const drinkBody6 = { id: 4, name: 'Cream', unitsOnHand: newCreamItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/4', drinkBody6)
              .subscribe(data => this.postId = data.id);

          });
        break;
      }
      case 'Cafe Latte': {

        console.log("switch value: Cafe Latte")

        // Recipe items
        // Id for Espresso: 7 (2)
        // Id for Steamed Milk: 5 (1)

        // Get Item counts: Espresso
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/7')
        .subscribe((res) => {
          console.log('currentEspressoItemCount: ', res.unitsOnHand)

          const newEspressoItemCount = res.unitsOnHand - 2;
          console.log('newEspressoItemCount: ', newEspressoItemCount)

          // Espresso ingredient update
          const drinkBody7 = { id: 7, name: 'Espresso', unitsOnHand: newEspressoItemCount };
          this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/7', drinkBody7)
            .subscribe(data => this.postId = data.id);

        });

        // Get Item counts: Steamed Milk
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/5')
          .subscribe((res) => {
            console.log('currentSteamedMilkItemCount: ', res.unitsOnHand)

            const newSteamedMilkItemCount = res.unitsOnHand - 1;
            console.log('newSteamedMilkItemCount: ', newSteamedMilkItemCount)

            // Steamed Milk ingredient update
            const drinkBody8 = { id: 5, name: 'Steamed Milk', unitsOnHand: newSteamedMilkItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/5', drinkBody8)
              .subscribe(data => this.postId = data.id);

          });

        break;
      }
      case 'Cafe Americano': {

        console.log("switch value: Cafe Americano")

        // Recipe item(s)
        // Id for Espresso: 7 (3)

        // Get Item counts: Espresso
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/7')
        .subscribe((res) => {
          console.log('currentEspressoItemCount: ', res.unitsOnHand)

          const newEspressoItemCount = res.unitsOnHand - 3;
          console.log('newEspressoItemCount: ', newEspressoItemCount)

          // Espresso ingredient update
          const drinkBody9 = { id: 7, name: 'Espresso', unitsOnHand: newEspressoItemCount };
          this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/7', drinkBody9)
            .subscribe(data => this.postId = data.id);

        });

        break;
      }
      case 'Cafe Mocha': {

        console.log("switch value: Cafe Mocha")

        // Recipe items
        // Id for Espresso: 7 (1)
        // Id for Cocoa: 8 (1)
        // Id for Steamed Milk: 5 (1)
        // Id for Whipped Cream: 9 (1)

        // Get Item counts: Espresso
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/7')
        .subscribe((res) => {
          console.log('currentEspressoItemCount: ', res.unitsOnHand)

          const newEspressoItemCount = res.unitsOnHand - 1;
          console.log('newEspressoItemCount: ', newEspressoItemCount)

          // Espresso ingredient update
          const drinkBodyMocha = { id: 7, name: 'Espresso', unitsOnHand: newEspressoItemCount };
          this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/7', drinkBodyMocha)
            .subscribe(data => this.postId = data.id);

        });

        // Get Item counts: Cocoa
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/8')
          .subscribe((res) => {
            console.log('currentCocoaItemCount: ', res.unitsOnHand)

            const newCocoaItemCount = res.unitsOnHand - 1;
            console.log('newCocoaItemCount: ', newCocoaItemCount)

            // Sugar ingredient update
            const drinkBody10 = { id: 8, name: 'Cocoa', unitsOnHand: newCocoaItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/8', drinkBody10)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Steamed Milk
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/5')
          .subscribe((res) => {
            console.log('currentSteamedMilkItemCount: ', res.unitsOnHand)

            const newSteamedMilkItemCount = res.unitsOnHand - 1;
            console.log('newSteamedMilkItemCount: ', newSteamedMilkItemCount)

            // Steamed Milk ingredient update
            const drinkBody11 = { id: 5, name: 'Steamed Milk', unitsOnHand: newSteamedMilkItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/5', drinkBody11)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Whipped Cream
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/9')
          .subscribe((res) => {
            console.log('currentWhippedCreamItemCount: ', res.unitsOnHand)

            const newWhippedCreamItemCount = res.unitsOnHand - 1;
            console.log('newWhippedCreammItemCount: ', newWhippedCreamItemCount)

            // Cream ingredient update
            const drinkBody12 = { id: 9, name: 'Whipped Cream', unitsOnHand: newWhippedCreamItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/9', drinkBody12)
              .subscribe(data => this.postId = data.id);

          });
        break;
      }
      case 'Cappuccino': {

        console.log("switch value: Cappuccino")

        // Recipe items
        // Id for Espresso: 7 (2)
        // Id for Steamed Milk: 5 (1)
        // Id for Foamed Milk: 6 (1)

        // Get Item counts: Espresso
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/7')
        .subscribe((res) => {
          console.log('currentEspressoItemCount: ', res.unitsOnHand)

          const newEspressoItemCount = res.unitsOnHand - 2;
          console.log('newEspressoItemCount: ', newEspressoItemCount)

          // Espresso ingredient update
          const drinkBody13 = { id: 7, name: 'Espresso', unitsOnHand: newEspressoItemCount };
          this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/7', drinkBody13)
            .subscribe(data => this.postId = data.id);

        });

        // Get Item counts: Steamed Milk
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/5')
          .subscribe((res) => {
            console.log('currentSteamedMilkItemCount: ', res.unitsOnHand)

            const newSteamedMilkItemCount = res.unitsOnHand - 1;
            console.log('newSteamedMilkItemCount: ', newSteamedMilkItemCount)

            // Steamed Milk ingredient update
            const drinkBody14 = { id: 5, name: 'Steamed Milk', unitsOnHand: newSteamedMilkItemCount };
            this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/5', drinkBody14)
              .subscribe(data => this.postId = data.id);

          });

        // Get Item counts: Foamed Milk
        this.http.get<InventoryItemInterface>('http://localhost:8080/inventoryItems/6')
        .subscribe((res) => {
          console.log('currentFoamedMilkItemCount: ', res.unitsOnHand)

          const newFoamedMilkItemCount = res.unitsOnHand - 1;
          console.log('newFoamedMilkItemCount: ', newFoamedMilkItemCount)

          // Foamed Milk ingredient update
          const drinkBody15 = { id: 6, name: 'Foamed Milk', unitsOnHand: newFoamedMilkItemCount };
          this.http.put<InventoryItemInterface>('http://localhost:8080/inventoryItems/6', drinkBody15)
            .subscribe(data => this.postId = data.id);

        });

        break;
      }
      default: {

        break;
      }
   }
  }
}

