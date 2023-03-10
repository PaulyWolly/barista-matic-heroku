import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrinkInterface } from '../types/drink.interface';
import { Observable } from 'rxjs';

import { InventoryItemInterface } from '../types/inventoryItem.interface';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  list: any;
  inventoryItems: InventoryItemInterface[] = [];

  // public localJsonServerUrl = 'http://localhost:8080/inventoryItems'
  public myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems'
  public herokuUrl = 'https://barista-matic-json-server.herokuapp.com/inventoryItems'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient ) { }

  getDrinks(): Observable<DrinkInterface[]> {

    let DrinkRecipes = this.http
      .get<DrinkInterface[]>(this.herokuUrl)
      return DrinkRecipes;
    // .pipe(
    //   map((drinks: DrinkInterface[]) => {
    //     // console.log("returned drinks: ========> ", drinks)
    //     return drinks.map(
    //       drink => ({
    //         id: drink.id,
    //         name: drink.name,
    //         cost: drink.cost,
    //         units: drink.units
    //       }))
    //   })
    // )
  }

  getInventoryItems() {

    // const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems'

    let RecipeItems = this.http
    .get<InventoryItemInterface[]>(this.herokuUrl)
    return RecipeItems;
  }

  getById(id: number) {
    // const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    return this.http.get<InventoryItemInterface>(this.herokuUrl + id);
  }

  getUnitsOnHandCount (id: number) {
    // get id for inventoryItem
    // get count from UnitsOnHand

    // const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    let idForItem = this.http.get<InventoryItemInterface>(this.herokuUrl + id);
    console.log("itemReturned", idForItem)
  }

  getInventoryItemId (id: any) {

    // const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    console.log('id in view is: ' + id);
    this.http.get<any>(this.herokuUrl + id)
    .subscribe((res: any) => {
      this.list = res;
      console.log('data with respect to id is: ' + res);
    });
  }

  update(payload: InventoryItemInterface){

    const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    this.http.put(this.herokuUrl + `${payload.id}`,payload);
  }

  patch(payload: InventoryItemInterface){

    const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    this.http.patch(this.herokuUrl + `${payload.id}`,payload);
  }

  editInventoryItems(id: number, body:InventoryItemInterface) {

    const localJsonServerUrl = 'http://localhost:8080/inventoryItems'
    const myJsonServerUrl = 'https://my-json-server.typicode.com/PaulyWolly/Barista-matic-main/inventoryItems/'

    let itemToEdit = this.http
      .put(this.herokuUrl + id,
        JSON.stringify(body.unitsOnHand),
        this.httpOptions)
      .subscribe((res) => {
        console.log("edit items: ", res)
    })
    return itemToEdit;
  }

}


