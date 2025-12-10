import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//carrega a data atual

selectedDate.value = inputToday;

//definindo a data minima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //previne o comportamento do formulario padrao de carregar a pagina
  event.preventDefault();

  //
  console.log("enviado");
};
