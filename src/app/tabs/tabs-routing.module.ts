import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'list-paciente',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list-paciente/list-paciente.module').then(m => m.ListPacientePageModule)
          }
        ]
      },
      {
        path: 'cadastrar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cadastrar/cadastrar.module').then(m => m.CadastrarPageModule)
          }
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sobre/sobre.module').then(m => m.SobrePageModule)
          }
        ]
      },
      {
        path: 'logout',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../logout/logout.module').then(m => m.LogoutPageModule)
          }
        ]
      },
      {
        path: 'pacientedetalhe',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pacientedetalhe/pacientedetalhe.module').then(m => m.PacientedetalhePageModule)
            }
          ]
        },
      // {
      //   path: 'cadastro',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'login',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../login/login.module').then(m => m.LoginPageModule)
      //     }
      //   ]
      // },
      {
        path: 'editadm',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../editadm/editadm.module').then(m => m.EditadmPageModule)
          }
        ]
      },
      {
        path: 'editsujeito',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../editsujeito/editsujeito.module').then(m => m.EditsujeitoPageModule)
          }
        ]
      },
      {
        path: 'funcglicose',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../funcglicose/funcglicose.module').then(m => m.FuncglicosePageModule)
          }
        ]
      },
      {
        path: 'funcimc',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../funcimc/funcimc.module').then(m => m.FuncimcPageModule)
          }
        ]
      },
      {
        path: 'funcpam',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../funcpam/funcpam.module').then(m => m.FuncpamPageModule)
          }
        ]
      },
      {
        path: 'comparativo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../comparativo/comparativo.module').then(m => m.ComparativoPageModule)
          }
        ]
      },
      {
        path: 'historico',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../historico/historico.module').then(m => m.HistoricoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
