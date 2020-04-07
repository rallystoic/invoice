import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenunavComponent } from './components/menunav/menunav.component';


const routes: Routes = [
{ path: '', redirectTo: 'admin', pathMatch: 'full'},
{path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
