import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/services/drink.service';
import { HttpClient } from '@angular/common/http';
import { InventoryItemInterface } from 'src/app/types/inventoryItem.interface';

@Component({
  selector: 'app-order-inventory',
  templateUrl: './order-inventory.component.html',
  styleUrls: ['./order-inventory.component.css']
})
export class OrderInventoryComponent implements OnInit {
  currentUnitsOnHand: InventoryItemInterface[] = []
  postId: any;
  itemsArray: InventoryItemInterface[] = []

  public showMessage: boolean = false;
  updateMessage: any = 'Updating... click "Refresh" to see updated units.'

  copyInventoryItems = [
    {
      "id": 1,
      "name": "Coffee",
      "unitsOnHand": 10
    },
    {
      "id": 2,
      "name": "Decaf Coffee",
      "unitsOnHand": 10
    },
    {
      "id": 3,
      "name": "Sugar",
      "unitsOnHand": 10
    },
    {
      "id": 4,
      "name": "Cream",
      "unitsOnHand": 10
    },
    {
      "id": 5,
      "name": "Steamed Milk",
      "unitsOnHand": 10
    },
    {
      "id": 6,
      "name": "Foamed Milk",
      "unitsOnHand": 10
    },
    {
      "id": 7,
      "name": "Espresso",
      "unitsOnHand": 10
    },
    {
      "id": 8,
      "name": "Cocoa",
      "unitsOnHand": 10
    },
    {
      "id": 9,
      "name": "Whipped Cream",
      "unitsOnHand": 10
    }
  ]



  constructor(
    private drinkService: DrinkService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  addAllUnits() {

    const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    console.log('AddAllUnits called');
    this.showMessage = true;

    const refillCount = 10;

    fetch('http://localhost:8080/inventoryItems/1', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: refillCount,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('waiting... to put /2');
      // this.getUpdatedItems();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/2', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: refillCount
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /3');
      // this.getUpdatedItems();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/3', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: refillCount
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /4');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/4', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /5');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/5', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /6');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/6', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /7');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/7', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /8');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/8', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setTimeout(() => {
      console.log('wating... to put /9');
      // this.reloadPage();
    }, 2000);

    this.ngOnInit();

    fetch('http://localhost:8080/inventoryItems/9', {
      method: 'PATCH',
      body: JSON.stringify({
        unitsOnHand: 10
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

      setTimeout(() => {
        console.log('wating... to reload component');
        this.reloadComponent();
      }, 2500);

  }

  reloadComponent() {
    this.ngOnInit();
  }

}
