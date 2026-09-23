import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- 1. Importe o FormsModule
import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './criar-pensamento.html',
  styleUrls: ['./criar-pensamento.css']
})
export class CriarPensamentoComponent {
  private readonly service = inject(PensamentoService);
  private readonly router = inject(Router);

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  };

 criarPensamento(): void {
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento']);
  });
}

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
