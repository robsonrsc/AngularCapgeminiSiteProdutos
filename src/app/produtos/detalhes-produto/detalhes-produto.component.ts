import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutoServiceService } from 'src/app/produto-service.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent  implements OnInit{

  produto:IProduto | undefined ;

  quantidade = 1;


  constructor (
private produtosService: ProdutoServiceService,
private route : ActivatedRoute,
private notificacaoService : NotificacaoService,
private carrinhoService : CarrinhoService,
private routes: Router

  ){}

  ngOnInit(): void {
     const routeParams = this.route.snapshot.paramMap;
     const produtoId = Number(routeParams.get ("id"));
     this.produto = this.produtosService.getOne(produtoId)

  }

  adicionarAoCarrinho (){
    this.notificacaoService.notificar ("O Produto foi adicionado ao Carrinho");
    const produto :IProdutoCarrinho = {
      ...this.produto!,
      quantidade:this.quantidade    
    }

    this.carrinhoService.adicionarAoCarrinho(produto);

  }



}
