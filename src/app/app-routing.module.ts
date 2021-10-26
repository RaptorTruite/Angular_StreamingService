import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSerieComponent } from './views/add-serie/add-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { ErrorComponent } from './views/error/error.component';
import { ListSerieComponent } from './views/list-serie/list-serie.component';
import { LoginComponent } from './views/login/login.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'series', component: ListSerieComponent},
  {path: 'series/add', component: AddSerieComponent},
  {path: 'series/:id', component: SingleSerieComponent},
  {path: 'series/:id/edit', component: EditSerieComponent},

  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
