import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addInventoryItem,
  removeInventoryItem,
  loadInventoryItems,
  loadInventoryItemSuccess,
  loadInventoryItemFailure,
} from './inventoryItem.actions';
import { InventoryItemService } from '../../services/inventoryItem.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllInventoryItems } from './inventoryItem.selectors';
import { AppState } from '../app.state';

@Injectable()
export class InventoryItemEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private inventoryItemService: InventoryItemService
  ) {}

  // Run this code when a loadInventoryItems action is dispatched
  loadInventoryItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInventoryItems),
      switchMap(() =>
        // Call the getInventoryItems method, convert it to an observable
        from(this.inventoryItemService.getInventoryItems()).pipe(
          // Take the returned value and return a new success action containing the inventory items
          map((inventoryItems) => loadInventoryItemSuccess({ inventoryItems: inventoryItems })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadInventoryItemFailure({ error })))
        )
      )
    )
  );

  // Run this code when the addTodo or removeTodo action is dispatched
  saveInventoryItems$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addInventoryItem, removeInventoryItem),
        withLatestFrom(this.store.select(selectAllInventoryItems)),
        switchMap(([action, invetoryItems]) => from(this.inventoryItemService.saveInventoryItems(invetoryItems)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
}
