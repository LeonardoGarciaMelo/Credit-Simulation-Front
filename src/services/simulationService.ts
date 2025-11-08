import { SimulationData } from "../types";
import { apiService } from "./apiService";

interface SimulationRequest {
    valorDesejado: number;
    prazo: number;
}

const createSimulation = async (data: SimulationRequest): Promise<SimulationData> => {
    const response = await apiService.post<SimulationData>('/simulacoes/simular', data);
    return response.data;
}

export const simulationService = {
    createSimulation
};