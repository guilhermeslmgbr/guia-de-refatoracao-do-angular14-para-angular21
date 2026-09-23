import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'memoteca';
}
