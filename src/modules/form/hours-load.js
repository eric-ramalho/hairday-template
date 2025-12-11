import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour, __] = hour.split(":");
    // Adiciona a hora na date e verificar se está no passdado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    // Define se o horario está disponivel
    return { hour, available: isHourPast };
  });

  // Renderizar os horarios
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    hours.append(li);
  });
}
