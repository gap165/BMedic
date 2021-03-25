import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agendarcita',
    loadChildren: () => import('./pages/agendarcita/agendarcita.module').then( m => m.AgendarcitaPageModule)
  },
  {
    path: 'citas-agendadas',
    loadChildren: () => import('./pages/citas-agendadas/citas-agendadas.module').then( m => m.CitasAgendadasPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'ficha-medica',
    loadChildren: () => import('./pages/ficha-medica/ficha-medica.module').then( m => m.FichaMedicaPageModule)
  },
  {
    path: 'historial-cliente',
    loadChildren: () => import('./pages/historial-cliente/historial-cliente.module').then( m => m.HistorialClientePageModule)
  },
  {
    path: 'medicos',
    loadChildren: () => import('./pages/medicos/medicos.module').then( m => m.MedicosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
