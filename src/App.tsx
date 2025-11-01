/**
 * @file src/App.tsx
 *
 * Componente raiz (container) da aplicação.
 * * Responsabilidades:
 * 1. Gerenciar o estado principal (dados da simulação, loading, erros).
 * 2. Orquestrar a chamada à API de simulação.
 * 3. Renderizar os componentes filhos (Formulário e Resultado).
 */

import { useState } from 'react'
import './App.css'
import { SimulationData } from './types'
import axios from 'axios'
import SimulationForm from './components/SimulationForm'
import SimulationResult from './components/SimulationResult'

const API_URL = 'http://localhost:5050/api/simulacoes/simular'

function App() {
  const [resultado, setResultado] = useState<SimulationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Manipulador assíncrono para buscar a simulação na API.
   * Esta função é passada como prop para o `SimulationForm`.
   *
   * @param {number} valorDesejado - O valor monetário solicitado pelo usuário.
   * @param {number} prazo - O número de meses para o pagamento.
   */
  const handleSimulacao = async (valorDesejado:number, prazo: number) => {
    setLoading(true);
    setError(null);
    setResultado(null);

    try{
      const response = await axios.post<SimulationData>(API_URL, {
        valorDesejado: valorDesejado,
        prazo: prazo
      })
      setResultado(response.data);
    } catch(err) {
      console.error("Erro ao simular: ", err);
      setError("Não foi possível realizar a simulação.Verifique os valores ou a conexão com a API");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="app-container">
      <header>
        <h1>Simulador de Crédito 💸</h1>
      </header>
      <main>
        <SimulationForm onSimular={handleSimulacao} loading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        
        {/* Renderização condicional do resultado */}
        {resultado && <SimulationResult data={resultado} />}
      </main>
    </div>
  )
}

export default App
