import { apiConfig } from "./api-config.js";

/**
 * Novo agendamento
 * @param {number} id - pega o ID do agendamento
 * @param {text} name - pega o nome do form
 * @param {number} when - pega a data e hora escolhida.
 *
 * vai pegar os dados e adicionar na API
 */
export async function scheduleNew({ id, name, when }) {
  try {
    //requisação pegando a base URL e adicionando a rota
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    alert("Agendamento realizado com sucesso");
    //
  } catch (error) {
    console.log(error);
    alert("não foi possivel agendar! Tente novamente mais tarde");
  }
}
