import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { from, Observable } from 'rxjs';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { PensamentoComponent } from '../pensamento/pensamento';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PensamentoComponent
  ],
  templateUrl: './listar-pensamento.html',
  styleUrls: ['./listar-pensamento.css']
})
export class ListarPensamentoComponent {

  private readonly service = inject(PensamentoService);

  // Observable direto gerenciado pelo Angular e o pipe async no HTML
  listaPensamentos$: Observable<Pensamento[]> = this.service.listar();

}
