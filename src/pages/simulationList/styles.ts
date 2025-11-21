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

// Info de paginação
export const PaginationInfo = styled.div`
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  span {
    color: #e0e7ff;
    font-size: 0.9rem;

    strong {
      color: #ffffff;
      font-weight: 600;
    }
  }
`;

// Grid de cards
export const SimulationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Card de simulação
export const SimulationCard = styled.div`
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

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #93c5fd;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
  }
`;

export const CardId = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 0.85rem;
    color: #bfdbfe;
    font-weight: 500;
  }

  span {
    font-size: 0.95rem;
    color: #ffffff;
    font-weight: 600;
  }
`;

// Controles de paginação
export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`;

export const PageButton = styled.button<{ $disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  background: ${props => props.$disabled 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
  color: ${props => props.$disabled ? 'rgba(255, 255, 255, 0.3)' : '#ffffff'};
  border: 1px solid ${props => props.$disabled 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(59, 130, 246, 0.3)'};
  border-radius: 10px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$disabled 
    ? 'none' 
    : '0 4px 12px rgba(59, 130, 246, 0.3)'};

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const CurrentPage = styled.span`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 16px;
`;

// Estado vazio
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
    margin: 0 0 24px 0;
  }
`;

// Loading state
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

// Mensagem de erro
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