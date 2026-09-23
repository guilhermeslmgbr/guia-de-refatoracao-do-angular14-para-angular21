import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  templateUrl: './excluir-pensamento.html',
  styleUrls: ['./excluir-pensamento.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  // Injeção moderna de dependências
  private readonly service = inject(PensamentoService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id, 10)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }

  excluirPensamento(): void {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
