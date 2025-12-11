import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//carrega a data atual

selectedDate.value = inputToday;

//definindo a data minima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamento do formulario padrao de carregar a pagina
  event.preventDefault();

  //
  try {
    //recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("informe o nome do cliente!");
    }

    //recurpera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    //recupera o horario selecionado
    if (!hourSelected) {
      return alert("Informe a hora");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // insere a hora na data

    const when = dayjs(selectedDate.value).add(hour, "hour");

    //gerar ID
    const id = new Date().getTime();

    scheduleNew({ id, name, when });
  } catch (error) {
    alert("Não foi possivel realizar o agendamento.");
    console.log(error);
  }
};
