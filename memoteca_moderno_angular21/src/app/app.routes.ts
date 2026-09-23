import { Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];
