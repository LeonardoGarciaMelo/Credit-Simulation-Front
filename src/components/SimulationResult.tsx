/**
 * @file src/components/SimulationResult.tsx
 *
 * Componente de apresentação (dumb component) responsável por
 * exibir os resultados da simulação em tabelas (SAC e PRICE).
 */

import type { SimulationData } from "../types";

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

interface SimulationResultProps {
    data: SimulationData;
}

/**
 * Renderiza os detalhes da simulação, incluindo um sumário do produto e as
 * tabelas de amortização SAC e PRICE.
 *
 * @param {SimulationResultProps} props - As propriedades contendo os dados da simulação.
 * @returns {React.ReactElement} O container de resultados.
 */
function SimulationResult({data}: SimulationResultProps) {
    const {IdSimulacao, CodigoProduto, DescricaoProduto, TaxaJuros, Resultados} = data;

    return(
        <div className="result-container">
            <h2> Resultado da Simulação </h2>
            <div className="result-summary">
                <p><strong> Id da Simulação: </strong>{IdSimulacao}</p>
                <p><strong> Código do Produto: </strong>{CodigoProduto}</p>
                <p><strong> Produto: </strong> {DescricaoProduto}</p>
                <p><strong> Taxa de Juros: </strong> {(TaxaJuros * 100).toFixed(2)}% a.m.</p>
            </div>

            {Resultados.map((simulacao) => (
                <div key={simulacao.Tipo} className="simulation-type">
                    <h3>Sistema de Amortização: {simulacao.Tipo}</h3>

                    <table className="result-table">
                        <thead>
                            <tr>
                                <th>Nº Parcela</th>
                                <th>Valor Amortização</th>
                                <th>Valor Juros</th>
                                <th>Valor Prestação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Itera sobre as parcelas de cada sistema 
                                e cria uma linha (<tr>) para cada parcela.
                            */}
                            {simulacao.Parcelas.map((parcela) => (
                                <tr key={parcela.numero}>
                                    <td>{parcela.numero}</td>
                                    <td>{formatCurrency(parcela.valorAmortizacao)}</td>
                                    <td>{formatCurrency(parcela.valorJuros)}</td>
                                    <td>{formatCurrency(parcela.valorPrestacao)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default SimulationResult;