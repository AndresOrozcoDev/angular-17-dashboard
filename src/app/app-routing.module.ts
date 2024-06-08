import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'mod1', pathMatch: 'full', loadChildren: () => import('./modules/mod1/mod1.module').then(m => m.Mod1Module) }, 
  { path: 'mod2', pathMatch: 'full', loadChildren: () => import('./modules/mod2/mod2.module').then(m => m.Mod2Module) },
  { path: 'mod3', pathMatch: 'full', loadChildren: () => import('./modules/mod3/mod3.module').then(m => m.Mod3Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
