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
  },
  {
    path: 'lis-clientes-nm',
    loadChildren: () => import('./Pages/lis-clientes-nm/lis-clientes-nm.module').then( m => m.LisClientesNMPageModule)
  },  {
    path: 'maquina',
    loadChildren: () => import('./Pages/maquina/maquina.module').then( m => m.MaquinaPageModule)
  },
  {
    path: 'dispensador',
    loadChildren: () => import('./Pages/dispensador/dispensador.module').then( m => m.DispensadorPageModule)
  },
  {
    path: 'lis-maquina',
    loadChildren: () => import('./Pages/lis-maquina/lis-maquina.module').then( m => m.LisMaquinaPageModule)
  },
  {
    path: 'lis-dispensador',
    loadChildren: () => import('./Pages/lis-dispensador/lis-dispensador.module').then( m => m.LisDispensadorPageModule)
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
