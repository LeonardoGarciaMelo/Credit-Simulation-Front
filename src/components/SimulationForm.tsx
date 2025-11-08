/**
 * @file src/components/SimulationForm.tsx
 *
 * Componente de apresentação (dumb component) responsável por
 * renderizar o formulário de entrada de simulação (valor e prazo).
 */
import React, { useState } from "react";
import * as S from '../styles/simulationFormStyles'
/**
 * Define as propriedades (props) esperadas pelo componente `SimulationForm`.
 */
interface SimulationFormProps {
    /**
   * Função de callback a ser executada quando o formulário for submetido.
   * Ela "sobe" os dados (valor e prazo) para o componente pai (App).
   *
   * @param valorDesejado - O valor numérico do input.
   * @param prazo - O prazo numérico do input.
   */
    onSimular: (valorDesejado: number, prazo: number) => void;
    loading: boolean;
}

/**
 * Renderiza o formulário para o usuário inserir o valor desejado e o prazo.
 *
 * @param {SimulationFormProps} props - As propriedades recebidas do componente pai (App).
 * @returns {React.ReactElement} O elemento JSX do formulário.
 */
function SimulationForm({onSimular, loading}: SimulationFormProps) {
    const [valorDesejado, setValorDesejado] = useState('900');
    const [prazo, setPrazo] = useState('5');

    /**
   * Manipulador para a submissão do formulário.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - O evento de submissão do formulário.
   */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSimular(parseFloat(valorDesejado), parseInt(prazo));
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
                <label htmlFor="valor">Valor Desejado</label>
                <input 
                    type="number"
                    id="valor"
                    value={valorDesejado}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValorDesejado(e.target.value)}
                    required
                />
            </S.FormGroup>
            <S.FormGroup>
                <label htmlFor="prazo">Prazo (em meses)</label>
                <input
                    type="number"
                    id="prazo"
                    value={prazo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrazo(e.target.value)}
                    required
                />
            </S.FormGroup>
            <S.SubmitButton type="submit" disabled={loading}>
                {loading ? 'Simulando...' : 'Simular'}
            </S.SubmitButton>
        </S.Form>
    )
}

export default SimulationForm;