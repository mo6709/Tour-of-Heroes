import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DeshboardComponent } from './deshboard/heroes.component';

const routes: Routes = [ 
    { path: 'heroes', component: HeroesComponent }
    { path: 'deshboard', component: DeshboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

