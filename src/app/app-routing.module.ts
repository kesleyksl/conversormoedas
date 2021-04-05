import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyComponentComponent } from './components/money-component/money-component.component';
import { PercentageComponent } from './components/percentage/percentage.component';

const routes: Routes = [{
  path:"",
  redirectTo: "Money",
  pathMatch: "full",
},
{
  path: "Money",
  component: MoneyComponentComponent
},
{
  path: "Percentage",
  component: PercentageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
