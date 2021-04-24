import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolishListComponent } from './polish-list/polish-list.component';



@NgModule({
  declarations: [RandomizerComponent, DashboardComponent, PolishListComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    RandomizerComponent
  ]
})
export class ComponentsModule { }
