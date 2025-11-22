import { useState } from "react";
import { FaChartLine } from 'react-icons/fa';
import { RelatorioDiario, simulationService } from "../../services/simulationService";
import * as S from './styles'

function DailyVolume() {
    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    );

    const [data, setData] = useState<RelatorioDiario | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDailyVolume = async () => {
        if (!selectedDate) {
            setError('Por favor, selecione uma data.');
            return;
        }

        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await simulationService.getVolumeDiario(selectedDate);
            setData(response);
        } catch (err: any) {
            console.error('Erro ao buscar volume diário:', err);
            if (err.response?.status === 400) {
                setError('Data inválida. Use o formato correto (AAAA-MM-DD).');
            } else if (err.response?.status === 404) {
                setError('Não foram encontradas simulações para esta data.');
            } else {
                setError('Não foi possível carregar o relatório. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const formatPercentage = (value: number) => {
        return (value * 100).toFixed(4) + '%';
    };

    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
    <S.PageContainer>
      <S.Background>
        <S.LightEffect1 />
        <S.LightEffect2 />
      </S.Background>

      <S.Container>
        <S.BackLink to="/">Voltar para Home</S.BackLink>

        <S.Header>
          <h1>Volume Diário por Produto</h1>
          <p>Consulte o volume simulado em um dia específico</p>
        </S.Header>

        <S.DateSelector>
          <label htmlFor="date">Selecione a data:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
          <button onClick={fetchDailyVolume} disabled={loading}>
            {loading ? 'Buscando...' : 'Consultar'}
          </button>
        </S.DateSelector>

        {data && !loading && (
          <S.DateInfo>
            <span>
              Relatório de <strong>{formatDate(data.dataReferencia)}</strong> •{' '}
              <strong>{data.simulacoes.length}</strong>{' '}
              {data.simulacoes.length === 1 ? 'produto' : 'produtos'}
            </span>
          </S.DateInfo>
        )}

        {loading && (
          <S.LoadingContainer>
            <S.Spinner />
            <span>Carregando relatório...</span>
          </S.LoadingContainer>
        )}

        {error && !loading && <S.ErrorMessage>{error}</S.ErrorMessage>}

        {!loading && !error && data && data.simulacoes.length === 0 && (
          <S.EmptyState>
            <FaChartLine size={80} />
            <h3>Nenhuma simulação encontrada</h3>
            <p>Não há simulações registradas para a data selecionada.</p>
          </S.EmptyState>
        )}

        {!loading && !error && data && data.simulacoes.length > 0 && (
          <S.ProductsGrid>
            {data.simulacoes.map((simulacao) => (
              <S.ProductCard key={simulacao.codigoProduto}>
                <S.ProductHeader>
                  <div>
                    <h3>{simulacao.descricaoProduto}</h3>
                    <span>Código {simulacao.codigoProduto}</span>
                  </div>
                  <S.ProductBadge>
                    {formatPercentage(simulacao.taxaMediaJuro)} a.m.
                  </S.ProductBadge>
                </S.ProductHeader>

                <S.MetricsGrid>
                  <S.MetricItem>
                    <label>Prestação Média</label>
                    <span>{formatCurrency(simulacao.valorMedioPrestacao)}</span>
                  </S.MetricItem>

                  <S.MetricItem>
                    <label>Total Desejado</label>
                    <span>{formatCurrency(simulacao.valorTotalDesejado)}</span>
                  </S.MetricItem>

                  <S.MetricItem>
                    <label>Total de Crédito</label>
                    <span>{formatCurrency(simulacao.valorTotalCredito)}</span>
                  </S.MetricItem>
                </S.MetricsGrid>
              </S.ProductCard>
            ))}
          </S.ProductsGrid>
        )}
      </S.Container>
    </S.PageContainer>
  );
}

export default DailyVolume