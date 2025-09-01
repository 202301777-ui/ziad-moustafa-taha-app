import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZiadListComponent } from './components/ziad-list/ziad-list.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ZiadListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
