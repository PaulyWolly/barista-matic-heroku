import { Component } from "@angular/core";
import { createSelector, Store } from "@ngrx/store";
import * as unitsSlice from "./units-slice";

@Component({
  selector: "app-counter",
  templateUrl: './units.component.html'
})
export class CounterComponent {
  constructor(private readonly store: Store<{}>) {}

  counter$ = this.store.select(
    createSelector(unitsSlice.selectFeature, (state) => state.count)
  );
}
