import { Component } from "@angular/core";
import { createSelector, Store } from "@ngrx/store";
import * as unitsSlice from "./units-slice";

@Component({
  selector: "app-units",
  template: ``
})
export class UNitsComponent {
  constructor(private readonly store: Store<{}>) {}

  counter$ = this.store.select(
    createSelector(unitsSlice.selectFeature, (state) => state.count)
  );
