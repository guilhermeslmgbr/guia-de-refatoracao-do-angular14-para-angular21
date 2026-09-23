import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 1. Adicionado import das rotas
import { Pensamento } from '../pensamento';   // 2. Aponta para a interface no nível acima

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],        // 3. Adicionado RouterLink aos imports
  templateUrl: './pensamento.html',
  styleUrls: ['./pensamento.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
