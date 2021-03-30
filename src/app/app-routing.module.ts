import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerComponent } from './flower/flower.component';

const routes: Routes = [
  {path: '', redirectTo: '/flowers', pathMatch: 'full'},
  {path: 'flowers', component: FlowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
