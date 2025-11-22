import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
`;

// Container principal da página
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 40px 20px;
  position: relative;
  overflow-x: hidden;
`;

// Background com gradiente
export const Background = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%);
  z-index: 0;
`;

// Efeitos de luz
export const LightEffect1 = styled.div`
  position: fixed;
  top: 20%;
  left: -20%;
  width: 400px;
  height: 400px;
  background: #2563eb;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(90px);
  opacity: 0.15;
  animation: ${pulse} 8s ease-in-out infinite;
  z-index: 0;
`;

export const LightEffect2 = styled.div`
  position: fixed;
  bottom: 20%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: #7c3aed;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(90px);
  opacity: 0.15;
  animation: ${pulse} 8s ease-in-out infinite;
  animation-delay: 3s;
  z-index: 0;
`;

// Container principal
export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

// Link de voltar
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: #93c5fd;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(-4px);
  }

  &::before {
    content: '←';
    font-size: 1.2rem;
  }
`;

// Header
export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 8px 0;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #bfdbfe;
    font-size: 0.95rem;
    margin: 0;
  }
`;

// Seletor de data
export const DateSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #bfdbfe;
  }

  input[type="date"] {
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 1rem;
    color: #ffffff;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
    cursor: pointer;

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: #60a5fa;
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }

    /* Estilizar o calendário */
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }
  }

  button {
    padding: 12px 24px;
    font-size: 0.95rem;
    font-weight: 600;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
    }

    &:disabled {
      background: rgba(255, 255, 255, 0.1);
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

// Info da data
export const DateInfo = styled.div`
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
  text-align: center;

  span {
    color: #e0e7ff;
    font-size: 1rem;

    strong {
      color: #ffffff;
      font-weight: 600;
    }
  }
`;

// Grid de produtos
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Card de produto
export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  div {
    h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 4px 0;
    }

    span {
      font-size: 0.75rem;
      color: #93c5fd;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
`;

export const ProductBadge = styled.div`
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.4);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #93c5fd;
  white-space: nowrap;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const MetricItem = styled.div`
  label {
    display: block;
    font-size: 0.8rem;
    color: #bfdbfe;
    margin-bottom: 4px;
    font-weight: 500;
  }

  span {
    display: block;
    font-size: 1rem;
    color: #ffffff;
    font-weight: 600;
  }

  &:nth-child(odd):last-child {
    grid-column: 1 / -1;
  }
`;

// Estados
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 16px;

  span {
    color: #bfdbfe;
    font-size: 0.95rem;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const ErrorMessage = styled.div`
  padding: 16px 20px;
  background: rgba(239, 68, 68, 0.15);
  color: #fecaca;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;
  font-weight: 500;
  backdrop-filter: blur(8px);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #bfdbfe;

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 0.95rem;
    margin: 0;
  }
`;