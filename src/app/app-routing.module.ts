import { HomeComponent } from './components/home/home.component';
import { CoucouComponent } from './exemple/components/coucou/coucou.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component:HomeComponent , children:[
    {path:'coucou', component:CoucouComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
