import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoService {
  private apiUrl = 'http://localhost:5050';

  constructor(private http: HttpClient) { }

  simular(dadosSimulacao: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/simulacoes/simular`, dadosSimulacao);
  }
  
}
