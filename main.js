//Variáveis
const btnAnotherFortune = document.querySelector("#openAnotherFortune")
const btnAFortune = document.querySelector("#closedFortuneCookie")
const fortuneMessage = document.querySelector("#fortuneMessage")
const screenClosedFortune = document.querySelector('.screen1')
const screenOpenedFortune = document.querySelector('.screen2')
const message1 = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
const message2 = "Não compense na ira o que lhe falta na razão."
const message3 = "A maior de todas as torres começa no solo."
const message4 = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"
const message5 = "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
let randomNumber = Math.round(Math.random() * (5 - 1) + 1) //Número inteiro aleatório entre 1 e 5

//Eventos
btnAnotherFortune.addEventListener('click', toggleList)
btnAFortune.addEventListener('click', fortune)

//Funções
function toggleList(e){
  screenOpenedFortune.classList.toggle("hide")
  screenClosedFortune.classList.toggle("hide")
}



function fortune(e){
  toggleList()
  
  switch("message" + randomNumber){
    
    case "message1" :
      fortuneMessage.innerText = message1
      break;

    case "message2" :
      fortuneMessage.innerText = message2
      break;

    case "message3" :
      fortuneMessage.innerText = message3
      break;

    case "message4" :
      fortuneMessage.innerText = message4
      break;

    default :
      fortuneMessage.innerText = message5

  }

  randomNumber = Math.round(Math.random() * (5 - 1) + 1)

}