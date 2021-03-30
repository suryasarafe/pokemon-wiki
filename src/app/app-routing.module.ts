import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/layout/default/default.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PokemonComponent } from './components/pages/pokemon/pokemon.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/:name', component: DetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
