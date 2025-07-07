import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicidade } from '../models/publicidade.model';

@Injectable({ providedIn: 'root' })
export class PublicidadeService {
  private apiUrl = 'http://localhost:8080/index.php';
  private http = inject(HttpClient); 

  getPublicidades(): Observable<Publicidade[]> {
    return this.http.get<Publicidade[]>(this.apiUrl);
  }
}