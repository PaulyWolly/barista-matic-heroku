import { InventoryItemState } from './inventoryItems/inventoryItem.reducer';

export interface AppState {
  inventoryItem: any;
  inventoryItems: InventoryItemState;
}
