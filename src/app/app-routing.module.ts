import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PolishListComponent } from './components/polish-list/polish-list.component';
import { RandomizerComponent } from './components/randomizer/randomizer.component';

const routes: Routes = [
  { path: 'randomizer', component: RandomizerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: PolishListComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
