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
    path: 'historial-cliente',
    loadChildren: () => import('./pages/historial-cliente/historial-cliente.module').then( m => m.HistorialClientePageModule)
  },
   {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'list-medicos',
    loadChildren: () => import('./pages/list-medicos/list-medicos.module').then( m => m.ListMedicosPageModule)
  },
  {
    path: 'datos-paciente',
    loadChildren: () => import('./pages/datos-paciente/datos-paciente.module').then( m => m.DatosPacientePageModule)
  },
  {
    path: 'cita-paciente',
    loadChildren: () => import('./pages/cita-paciente/cita-paciente.module').then( m => m.CitaPacientePageModule)
  },
  {
    path: 'lista-pacientes',
    loadChildren: () => import('./pages/lista-pacientes/lista-pacientes.module').then( m => m.ListaPacientesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
