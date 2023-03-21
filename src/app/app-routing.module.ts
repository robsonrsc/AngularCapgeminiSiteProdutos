import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: "", redirectTo: "produtos",pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: "contato" , loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },

  {path: "**", component: NaoEncontradoComponent},
  {path: ':id' , component: DetalhesProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
