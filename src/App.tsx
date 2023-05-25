import React, { useState } from 'react';
import './App.css';
import icondDice from './assets/icon-dice.svg';
import icondDivider from './assets/pattern-divider-desktop.svg';
function App() {

  const [id, setId] = useState(0);

  const data = [
    {
        id: 0,
        frase: "A pessoa mais perigosa é aquela que ouve, pensa e observa."
    },
    {
        id: 1,
        frase: "Demorei mas aprendi. Nem todo mundo é oque diz ser."
    },
    {
        id: 2,
        frase: "Treine sua mente até ela entender, que você só sofre se você deixar."
    },
    {
        id: 3,
        frase: "Eu não chamo nenhuma pessoa de amigo, de amor ou de filho da puta sem que ela seja."
    },
    {
        id: 4,
        frase: "Niguem tem que achar nada. Eu estou fazendo por mim."
    },
    {
        id: 5,
        frase: "Experiência é o nome que dou aos meus erros."
    },
    {
        id: 6,
        frase: "Por trás de toda frieza existe alguém que já se importou demais."
    },
    {
        id: 7,
        frase: "Estava sozinho na minha pior fase, na melhor, quero estar da mesma forma."
    },
    {
        id: 8,
        frase: "Pare de tratar as pessoas como se devesse algo a elas."
    },
    {
        id: 9,
        frase: "Você sempre será o vilão quando deixar de agradar alguém"
    },
    {
        id: 0,
        frase: "Não espere de mim mais do que eu recebo de você."
    },
  ]

  const randomID = () => {
    setId(Math.floor(Math.random() * data.length));
  }

  return (
    <div className='container'>
      <div className='teste'>
        <div className='content'>
          <header>
            <h1>ADVICE</h1>
            <h1>#{data[id].id}</h1>
          </header>

          <p>"{data[id].frase}"</p>

          <footer>
            <img className='divisor' src={icondDivider} />
          </footer>
        </div>

        <a onClick={randomID} className='botao-random'>
          <img src={icondDice} />
        </a>
      </div>
    </div>
  );
}

export default App;
