import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimulacaoService } from '../services/simulacao';
import { SimulacaoRequest } from '../interfaces/simulacao.interface';

@Component({
  selector: 'app-simulacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simulacao.html',
  styleUrl: './simulacao.css'
})
export class SimulacaoComponent {
  dadosSimulacao: SimulacaoRequest = {
    valorDesejado: 0 ,
    prazo: 0
  }

  resultadoSimulacao: any;
  erroNaSimulacao: string | null = null;

  constructor(private simulacaoService: SimulacaoService){ }

  onSubmit() {
    this.erroNaSimulacao = null;
    this.resultadoSimulacao = null;

    this.simulacaoService.simular(this.dadosSimulacao)
    .subscribe({
      next: (resposta) => {
          // Deu tudo certo!
          console.log('API respondeu com sucesso:', resposta);
          this.resultadoSimulacao = resposta;
        },
        error: (erro) => {
          // Deu erro!
          console.error('Erro ao chamar a API:', erro);
          this.erroNaSimulacao = 'Não foi possível realizar a simulação. Verifique os dados ou tente mais tarde.';
        }
    })
  }

}
