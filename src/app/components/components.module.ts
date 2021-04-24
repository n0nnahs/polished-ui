import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [RandomizerComponent, DashboardComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    RandomizerComponent
  ]
})
export class ComponentsModule { }
