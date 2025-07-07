import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Publicidade {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string | null;
  botao_link: string | null;
  titulo_botao_link: string | null;
  sp_estado: boolean;
  mg_estado: boolean;
  rj_estado: boolean;
  dt_inicio: string;  
  dt_fim: string;     
  validade: 'valida' | 'vencida';
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'], 
})
export class ContentComponent implements OnInit {
  
  @Output() componentSelected = new EventEmitter<string>();

  publicidades$!: Observable<Publicidade[]>;

  menuAberto: number | null = null;

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/index.php';

  ngOnInit(): void {
    this.publicidades$ = this.http.get<Publicidade[]>(this.apiUrl);
  }

  selectComponent(componentName: string) {
    this.componentSelected.emit(componentName);
  }

  toggleMenu(index: number): void {
    this.menuAberto = this.menuAberto === index ? null : index;
  }

  editar(publiId: number) {
    console.log('Editar clicado para', publiId);
    this.menuAberto = null;
  }

  encerrar(publiId: number) {
    console.log('Encerrar clicado para', publiId);
    this.menuAberto = null;
  }
}
