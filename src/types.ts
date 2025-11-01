/**
 * @file src/types.ts
 *
 * Define as interfaces e contratos de dados (DTOs - Data Transfer Objects)
 * esperados da API de simulação de crédito.
 * Estes tipos garantem a segurança de tipo em toda a aplicação.
 */

/**
 * Representa a estrutura de uma única parcela no plano de amortização.
 */

export interface Parcela {
    numero: number;
    valorAmortizacao: number;
    valorJuros: number;
    valorPrestacao: number;
}

export interface ResultadoSimulacao {
    Tipo: 'SAC' | 'PRICE' | string;
    Parcelas: Parcela[];
}

export interface SimulationData {
    IdSimulacao: string;
    CodigoProduto: number;
    DescricaoProduto: string;
    TaxaJuros: number;
    Resultados: ResultadoSimulacao[];
}