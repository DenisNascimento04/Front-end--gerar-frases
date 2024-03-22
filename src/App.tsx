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
        frase: "Eu não chamo nenhuma pessoa de amigo, de amor ou de um xingamento sem que ela seja."
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
        id: 10,
        frase: "Não espere de mim mais do que eu recebo de você."
    },
    {
        id: 11,
        frase: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta."
    },
    {
        id: 12,
        frase: "Acredite em si mesmo e todo o resto se encaixará. Tenha fé em seus próprios talentos, habilidades e boa vontade."
    },
    {
        id: 13,
        frase: "O que quer que você possa fazer, ou sonhe que pode, comece. A audácia contém genialidade, poder e magia."
    },
    {
        id: 14,
        frase: "A jornada de mil milhas começa com um único passo."
    },
    {
        id: 15,
        frase: "Não espere por circunstâncias ideais. Elas nunca chegarão. Comece onde você está, com o que você tem, e faça o melhor que puder."
    },
    {
        id: 16,
        frase: "Você é mais forte do que pensa. Mais corajoso do que acredita. E mais talentoso do que imagina."
    },
    {
        id: 17,
        frase: "Não permita que o que você não pode fazer impeça você de fazer o que você pode fazer."
    },
    {
        id: 18,
        frase: "O otimismo é a fé em ação. Nada pode ser feito sem esperança e confiança."
    },
    {
        id: 19,
        frase: "Não é o que acontece com você, mas como você reage que importa."
    },
    {
        id: 20,
        frase: "A persistência é o segredo do sucesso. Nunca desista de seus sonhos. Se você cair, levante-se, sacuda a poeira e continue avançando."
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
