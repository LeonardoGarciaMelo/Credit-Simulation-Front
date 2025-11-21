import { SimulationData } from "../types";
import { apiService } from "./apiService";

interface SimulationRequest {
    valorDesejado: number;
    prazo: number;
}

export interface SimulacaoListItem {
    idSimulacao: string;
    valorDesejado: number;
    prazo: number;
    valorTotalParcelas: number;
}

export interface SimulacoesListResponse {
    pagina: number;
    qtdRegistros: number;
    qtdRegistrosPagina: number;
    registros: SimulacaoListItem[];
}

const createSimulation = async (data: SimulationRequest): Promise<SimulationData> => {
    const response = await apiService.post<SimulationData>('/simulacoes/simular', data);
    return response.data;
}

const listSimulations = async (pagina: number = 1, limite: number = 20): Promise<SimulacoesListResponse> => {
    const response = await apiService.get<SimulacoesListResponse>('/simulacoes/listar', {
        params: {
            pagina,
            limite
        }
    });
    return response.data;
}

export const simulationService = {
    createSimulation,
    listSimulations
};