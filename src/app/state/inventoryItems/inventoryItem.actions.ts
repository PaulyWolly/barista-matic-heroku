import { createAction, props } from '@ngrx/store';
import { InventoryItem } from '../../inventoryItem/inventoryItem.model';

export const addInventoryItem = createAction(
  '[InventoryItem Page] Add InventoryItem',
  props<{ name: string, units: number, cost: number }>()
);

export const removeInventoryItem = createAction(
  '[InventoryItem Page] Remove InventoryItem',
  props<{ id: number }>()
);

export const loadInventoryItems = createAction('[InventoryItem Page] Load InventoryItems');

// triggered by effect
export const loadInventoryItemSuccess = createAction(
  '[InventoryItem API] InventoryItem Load Success',
  props<{ inventoryItems: InventoryItem[] }>()
);
// triggered by effect
export const loadInventoryItemFailure = createAction(
  '[InventoryItem API] InventoryItem Load Failure',
  props<{ error: string }>()
);
