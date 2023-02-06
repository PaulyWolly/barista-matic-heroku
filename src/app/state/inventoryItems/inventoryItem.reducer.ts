import { createReducer, on } from '@ngrx/store';
import {
  addInventoryItem,
  removeInventoryItem,
  loadInventoryItems,
  loadInventoryItemSuccess,
  loadInventoryItemFailure,
} from './inventoryItem.actions';
import { InventoryItem } from '../../inventoryItem/inventoryItem.model';

export interface InventoryItemState {
  inventoryItems: InventoryItem[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: InventoryItemState = {
  inventoryItems: [],
  error: '',
  status: 'pending',
};

export const inventoryItemReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new inventoryItem to the inventoryItems array
  on(addInventoryItem, (state, {name, units, cost} ) => ({
    ...state,
    inventoryItems: [...state.inventoryItems, { id: Date.now(), name: name, units: units, cost: cost }],
  })),
  // Remove the inventoryItem from the inventoryItems array
  on(removeInventoryItem, (state, { id }) => ({
    ...state,
    inventoryItems: state.inventoryItems.filter((inventoryItem) => inventoryItem.id !== id),
  })),
  // Trigger loading the inventoryItems
  on(loadInventoryItems, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded inventoryItems
  on(loadInventoryItemSuccess, (state, { inventoryItems }) => ({
    ...state,
    inventoryItems: inventoryItems,
    error: '',
    status: 'success',
  })),
  // Handle inventoryItems load failure
  on(loadInventoryItemFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
