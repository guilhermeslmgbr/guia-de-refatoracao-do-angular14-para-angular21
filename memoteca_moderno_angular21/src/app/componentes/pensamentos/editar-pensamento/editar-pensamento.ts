import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './editar-pensamento.html',
  styleUrls: ['./editar-pensamento.css']
})
export class EditarPensamentoComponent implements OnInit {

  private readonly service = inject(PensamentoService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef); // Injeta o detector de mudanças

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id, 10)).subscribe((resposta) => {
        // Extrai o item caso o json-server retorne um array [ { ... } ]
        const dados = Array.isArray(resposta) ? resposta[0] : resposta;

        // Cria uma nova referência na memória para forçar a atualização do formulário
        this.pensamento = { ...dados };

        // Força o Angular a renderizar os novos valores imediatamente na tela
        this.cdr.detectChanges();
      });
    }
  }

  editarPensamento(): void {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
