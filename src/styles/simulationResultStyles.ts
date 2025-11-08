import styled from 'styled-components';

// Container principal dos resultados
export const ResultContainer = styled.div`
  margin-top: 32px;

  > h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 24px 0;
    text-align: center;
  }
`;

// Resumo do resultado (card superior)
export const ResultSummary = styled.div`
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 32px;
  backdrop-filter: blur(8px);

  p {
    margin: 8px 0;
    color: #e0e7ff;
    font-size: 0.95rem;
    line-height: 1.6;

    strong {
      color: #ffffff;
      font-weight: 600;
    }
  }

  p:first-child {
    font-size: 1.1rem;
    color: #ffffff;
    margin-bottom: 12px;
  }
`;

// Container de cada tipo de simulação (SAC/PRICE)
export const SimulationType = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 20px 0;
    padding-bottom: 12px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// Tabela de parcelas
export const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  th, td {
    padding: 14px 16px;
    text-align: right;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    background: rgba(255, 255, 255, 0.08);
    font-weight: 600;
    font-size: 0.9rem;
    color: #bfdbfe;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  td {
    color: #e0e7ff;
    font-size: 0.95rem;
    font-variant-numeric: tabular-nums;
  }

  td:first-child, th:first-child {
    text-align: center;
    font-weight: 600;
    color: #ffffff;
  }

  tbody tr {
    transition: background-color 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    &:last-child td {
      border-bottom: none;
    }
  }

  /* Destaque para valores importantes */
  td:last-child {
    font-weight: 600;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    th, td {
      padding: 10px 8px;
    }
  }
`;