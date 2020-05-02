import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./feature/home/home.module#HomeModule"
  },
  {
    path: "category",
    loadChildren: "./feature/category/category.module#CategoryModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
