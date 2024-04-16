    async function buscar() {
        console.log("--------------------------------------")

        const resposta = await fetch("https://66186b439a41b1b3dfbd0579.mockapi.io/gamecast/agenda")

        const respostaDadosAgenda = await resposta.json()
        console.log("Resposta:", respostaDadosAgenda)

        const cards = document.getElementById("cards_games")

        cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            return "TESTE"
        })
    }
    buscar()
    
    