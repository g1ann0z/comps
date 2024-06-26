import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements.module')
    .then(m => m.ElementsModule) //lazy loading
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module')
    .then(m => m.CollectionsModule) //lazy loading
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module')
    .then(m => m.ViewsModule) //lazy loading
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module')
    .then(m => m.ModsModule) //lazy loading
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
