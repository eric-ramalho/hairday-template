import { schedulesDay } from "./schedules/load.js";

//Eventos para realizar assim que o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  schedulesDay();
});
