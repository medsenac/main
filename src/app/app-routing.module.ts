import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
     canActivate: [TutorialGuard]
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },

  {
    path: 'list-paciente',
    loadChildren: () => import('./list-paciente/list-paciente.module').then( m => m.ListPacientePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'editsujeito',
    loadChildren: () => import('./editsujeito/editsujeito.module').then( m => m.EditsujeitoPageModule)
  },
  {
    path: 'editsujeito/:id',
    loadChildren: () => import('./editsujeito/editsujeito.module').then( m => m.EditsujeitoPageModule)
  },
  {
    path: 'editadm',
    loadChildren: () => import('./editadm/editadm.module').then( m => m.EditadmPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'cadastro',
  //   loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  // },
  {
    path: 'pacientedetalhe',
    loadChildren: () => import('./pacientedetalhe/pacientedetalhe.module').then( m => m.PacientedetalhePageModule)
  },
  {
    path: 'pacientedetalhe/:id',
    loadChildren: () => import('./pacientedetalhe/pacientedetalhe.module').then( m => m.PacientedetalhePageModule)
  },
  {
    path: 'funcimc',
    loadChildren: () => import('./funcimc/funcimc.module').then( m => m.FuncimcPageModule)
  },
  {
    path: 'funcpam',
    loadChildren: () => import('./funcpam/funcpam.module').then( m => m.FuncpamPageModule)
  },
  {
    path: 'funcglicose',
    loadChildren: () => import('./funcglicose/funcglicose.module').then( m => m.FuncglicosePageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'comparativo',
    loadChildren: () => import('./comparativo/comparativo.module').then( m => m.ComparativoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
