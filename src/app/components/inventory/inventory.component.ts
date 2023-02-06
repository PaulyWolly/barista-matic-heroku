import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryItemInterface } from '../../types/inventoryItem.interface';

import { DrinkService } from 'src/app/services/drink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryItems: InventoryItemInterface[] = [];

  constructor(
    private http: HttpClient,
    private drinkService: DrinkService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getInventoryItems()
  }

  getInventoryItems() {
    this.drinkService.getInventoryItems()
    .subscribe((items) => {
      this.inventoryItems = items;
      console.log("InventoryItems returned: ", items)
      this.route.navigate(["inventory"])
    })
  }

  editInventoryItems(id: number) {
    // this.drinkService.
  }

  refreshContent() {
    // refresh application component
    this.ngOnInit();

  }

}
