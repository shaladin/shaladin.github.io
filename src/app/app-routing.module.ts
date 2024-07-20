import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {} from '@shaladin/flytail-angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  // {
  //   path: 'flytail',
  //   loadComponent: () => import('@shaladin/flytail-angular').then((c) => c.FlytailAngularComponent)
  // },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
