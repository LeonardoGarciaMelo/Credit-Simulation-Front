import { useState, useEffect } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { simulationService, SimulacoesListResponse } from '../../services/simulationService';
import * as S from './styles';

function SimulationsList() {
  const [data, setData] = useState<SimulacoesListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Carregar simulações
  const loadSimulations = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await simulationService.listSimulations(page, itemsPerPage);
      setData(response);
    } catch (err) {
      console.error('Erro ao carregar simulações:', err);
      setError('Não foi possível carregar as simulações. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Carregar na montagem e quando mudar página
  useEffect(() => {
    loadSimulations(currentPage);
  }, [currentPage]);

  // Formatação de moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  // Formatar ID curto
  const formatShortId = (id: string) => {
    return id.substring(0, 8);
  };

  const totalPages = data ? Math.ceil(data.qtdRegistros / itemsPerPage) : 0;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <S.PageContainer>
      <S.Background>
        <S.LightEffect1 />
        <S.LightEffect2 />
      </S.Background>

      <S.Container>
        <S.BackLink to="/">Voltar para Home</S.BackLink>

        <S.Header>
          <h1>Simulações Realizadas</h1>
          <p>Histórico completo de todas as simulações</p>
        </S.Header>

        {data && !loading && (
          <S.PaginationInfo>
            <span>
              <strong>{data.qtdRegistros}</strong> simulações encontradas
            </span>
            <span>
              Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
            </span>
          </S.PaginationInfo>
        )}

        {loading && (
          <S.LoadingContainer>
            <S.Spinner />
            <span>Carregando simulações...</span>
          </S.LoadingContainer>
        )}

        {error && !loading && (
          <S.ErrorMessage>{error}</S.ErrorMessage>
        )}

        {!loading && !error && data && data.registros.length === 0 && (
          <S.EmptyState>
            <FaFileAlt size={80} />
            <h3>Nenhuma simulação encontrada</h3>
            <p>Faça sua primeira simulação para ver os resultados aqui!</p>
          </S.EmptyState>
        )}

        {!loading && !error && data && data.registros.length > 0 && (
          <>
            <S.SimulationsGrid>
              {data.registros.map((simulacao) => (
                <S.SimulationCard key={simulacao.idSimulacao}>
                  <S.CardHeader>
                    <h3>Simulação</h3>
                    <S.CardId>#{formatShortId(simulacao.idSimulacao)}</S.CardId>
                  </S.CardHeader>

                  <S.CardInfo>
                    <S.InfoRow>
                      <label>Valor Solicitado:</label>
                      <span>{formatCurrency(simulacao.valorDesejado)}</span>
                    </S.InfoRow>

                    <S.InfoRow>
                      <label>Prazo:</label>
                      <span>{simulacao.prazo} meses</span>
                    </S.InfoRow>

                    <S.InfoRow>
                      <label>Total a Pagar:</label>
                      <span>{formatCurrency(simulacao.valorTotalParcelas)}</span>
                    </S.InfoRow>
                  </S.CardInfo>
                </S.SimulationCard>
              ))}
            </S.SimulationsGrid>

            {totalPages > 1 && (
              <S.PaginationControls>
                <S.PageButton 
                  onClick={goToPrevPage} 
                  $disabled={currentPage === 1}
                  disabled={currentPage === 1}
                >
                  ← Anterior
                </S.PageButton>

                <S.CurrentPage>
                  {currentPage} / {totalPages}
                </S.CurrentPage>

                <S.PageButton 
                  onClick={goToNextPage} 
                  $disabled={currentPage === totalPages}
                  disabled={currentPage === totalPages}
                >
                  Próxima →
                </S.PageButton>
              </S.PaginationControls>
            )}
          </>
        )}
      </S.Container>
    </S.PageContainer>
  );
}

export default SimulationsList;