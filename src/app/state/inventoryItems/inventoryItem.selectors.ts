import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { InventoryItemState } from './inventoryItem.reducer';

export const selectInventoryItems = (state: AppState) => state.inventoryItem;

export const selectAllInventoryItems = createSelector(
  selectInventoryItems,
  (state: InventoryItemState) => state.inventoryItems
);
