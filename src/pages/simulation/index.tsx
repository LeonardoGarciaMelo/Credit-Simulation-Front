import { useState } from "react";
import { simulationService } from "../../services/simulationService";
import SimulationForm from "../../components/SimulationForm";
import SimulationResult from "../../components/SimulationResult";
import { SimulationData } from "../../types";
import * as S from "./styles";

function SimulationPage() {
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
  const handleSimulacao = async (valorDesejado: number, prazo: number) => {
    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      const data = await simulationService.createSimulation({
        valorDesejado: valorDesejado,
        prazo: prazo
      });

      setResultado(data);
    } catch (err) {
      console.error("Erro ao simular: ", err);
      setError("Não foi possível realizar a simulação. Verifique os valores ou a conexão com a API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.PageContainer>
      {/* Background com gradiente e efeitos */}
      <S.Background>
        <S.LightEffect1 />
        <S.LightEffect2 />
      </S.Background>

      <S.Container>
        <S.BackLink to="/">Voltar para Home</S.BackLink>
        
        <S.Header>
          <h1>Simulador de Crédito</h1>
        </S.Header>

        <main>
          <SimulationForm onSimular={handleSimulacao} loading={loading} />
          
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          
          {resultado && <SimulationResult data={resultado} />}
        </main>
      </S.Container>
    </S.PageContainer>
  );
}

export default SimulationPage;