import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

//seleciona o input de data
const selectDate = document.getElementById("date");

export async function schedulesDay() {
  //obtem a data do input
  const date = selectDate.value;

  //buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  hoursLoad({ date });
}
