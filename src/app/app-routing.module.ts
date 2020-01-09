import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'lis-clientes',
    loadChildren: () => import('./Pages/lis-clientes/lis-clientes.module').then( m => m.LisClientesPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./Pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-combustibles',
    loadChildren: () => import('./Pages/list-combustibles/list-combustibles.module').then( m => m.ListCombustiblesPageModule)
  },
  {
    path: 'combustible',
    loadChildren: () => import('./Pages/combustible/combustible.module').then( m => m.CombustiblePageModule)
  },
  {
    path: 'list-islas',
    loadChildren: () => import('./Pages/list-islas/list-islas.module').then( m => m.ListIslasPageModule)
  },
  {
    path: 'isla',
    loadChildren: () => import('./Pages/isla/isla.module').then( m => m.IslaPageModule)
  },
  {
    path: 'list-usuarios',
    loadChildren: () => import('./Pages/list-usuarios/list-usuarios.module').then( m => m.ListUsuariosPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./Pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'list-reportes',
    loadChildren: () => import('./Pages/list-reportes/list-reportes.module').then( m => m.ListReportesPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./Pages/reporte/reporte.module').then( m => m.ReportePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
