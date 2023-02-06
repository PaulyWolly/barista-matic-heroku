import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { InvContentComponent } from './components/inventory-content/inv-content.component';
import { DispensedComponent } from './components/dispensed/dispensed.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: ContentComponent},
  {path: 'inventory', component: InvContentComponent},
  {path: 'dispensed', component: DispensedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
