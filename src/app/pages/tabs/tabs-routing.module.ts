import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'datos',
        loadChildren:'../datos-paciente/datos-paciente.module#DatosPacientePageModule'
      },
      {
      path: 'inicio',
      loadChildren:'../inicio/inicio.module#InicioPageModule'
      },
      {
        path:'medicos',
        loadChildren:'../list-medicos/list-medicos.module#ListMedicosPageModule'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
