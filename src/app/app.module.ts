import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MenuComponent } from './components/menu/menu.component';
import { DispensedComponent } from './components/dispensed/dispensed.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ContentComponent } from './components/content/content.component';
import { DrinkComponent } from './components/drink/drink.component';
import { InvContentComponent } from './components/inventory-content/inv-content.component';
import { OrderInventoryComponent } from './components/order-inventory/order-inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    MenuComponent,
    DispensedComponent,
    InventoryComponent,
    ContentComponent,
    DrinkComponent,
    InvContentComponent,
    OrderInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
