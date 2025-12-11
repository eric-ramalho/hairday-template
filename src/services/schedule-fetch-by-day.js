import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ data }) {
  try {
    //buscar dados na api, fazendo requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // converte para JSON
    const data = await response.json();

    // Filtra os agendamentos para o dia selecionado
    const dailySchedules = data.filter((schedule) => {
      dayjs(date).isSame(schedule.when, "day");
    });
    return dailySchedules;
  } catch (error) {
    console.log("Não foi possivel buscar o agendamento do dia selecionado");
  }
}
