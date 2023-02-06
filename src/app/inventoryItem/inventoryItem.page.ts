import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addInventoryItem, removeInventoryItem, loadInventoryItems } from '../state/inventoryItems/inventoryItem.actions';
import { selectAllInventoryItems } from '../state/inventoryItems/inventoryItem.selectors';
import { InventoryItem } from './inventoryItem.model';

@Component({
  selector: 'app-inventoryItem',
  templateUrl: './inventoryItem.page.html',
  styleUrls: ['./inventoryItem.page.css'],
})
export class InventoryItemPage implements OnInit {
  public allInventoryItems$ = this.store.select(selectAllInventoryItems);
  public inventoryItem = '';

  name: any;
  units!: any;
  cost!: any;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadInventoryItems());
  }

  addInventoryItem() {
    this.store.dispatch(addInventoryItem({ name: this.name, cost: this.cost, units: this.units }));
    this.inventoryItem = '';
  }

  removeTodo(inventoryItem: InventoryItem) {
    this.store.dispatch(removeInventoryItem({ id: inventoryItem.id }));
  }
}
