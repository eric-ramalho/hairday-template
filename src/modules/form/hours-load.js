import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour, __] = hour.split(":");
    // Adiciona a hora na date e verificar se está no passdado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    // Define se o horario está disponivel
    return { hour, availabre: isHourPast };
  });
}
