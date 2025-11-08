import styled from 'styled-components';

// Container do formulário
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 20px;
  margin-bottom: 32px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// Grupo de campo
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #bfdbfe;
    letter-spacing: 0.025em;
  }

  input {
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 1rem;
    color: #ffffff;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: #60a5fa;
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    /* Remove setas do input number */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`;

// Botão de submit
export const SubmitButton = styled.button`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  height: 48px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;