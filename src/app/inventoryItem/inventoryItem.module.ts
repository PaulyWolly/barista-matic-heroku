import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InventoryItemPage } from './inventoryItem.page';

// import { InventoryItemPageRoutingModule } from './inventoryItem-routing.module';

@NgModule({
  // imports: [CommonModule, FormsModule, IonicModule, TodoPageRoutingModule],
  imports: [
    CommonModule,
    FormsModule
    // ,
    // IonicModule
  ],
  declarations: [InventoryItemPage],
})
export class InventoryItemPageModule {}
