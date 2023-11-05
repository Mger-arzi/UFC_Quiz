

import React from 'react';
import './App.css'

const questions = [
  // {
  //   title: 'React - это ... ? ',
  //   variants: ['библиотека', 'фреймворк', 'приложение'],
  //   correct: 0,
  // },

  // {
  //   title: 'Что такое JSX?',
  //   variants: [
  //     'Это простой HTML',
  //     'Это функция',
  //     'Это тот же HTML, но с возможностью выполнять JS-код',
  //   ],
  //   correct:2
  // },



  {
    title: 'Кто провел больше всех боев в UFC?',
    variants: ['Jeremy Stephens', 'Rafael Dos Anjos ', 'Jim Miller'],
    correct: 2,
  }, {
    title: 'Кто самый сильный в UFC 4?',
    variants: ['Джон Джонс', 'Аманда Нуньес', 'Исраэль Адесанья'],
    correct: 1,
  }, {
    title: 'Кто первый двойной чемпион UFC? ',
    variants: ['Конор Макгрегор', 'Генри Сехудо', 'Даниель Кормье'],
    correct: 0,
  },

  {
    title: 'Сколько стоит один пояс UFC? ',
    variants: ['$100 000', '$300 000', '$500 000'],
    correct: 0,
  },
  {
    title: 'Кто придумал ММА? ',
    variants: ['Брюс Ли.', 'Рик Блю', 'Хелио Грейси '],
    correct: 1,
  },
  {
    title: 'Больше всего нанесенo акц.ударов в UFC? ',
    variants: ['Jose Aldo', 'Jeff Molino', 'Max Holloway'],
    correct: 2,
  },
  {
    title: 'В каком году состоялся первый турнир UFC? ',
    variants: ['1992г', '1993г', '2002г'],
    correct: 0,
  },
  {
    title: 'Когда было UFC в России?',
    variants: ['2016г', '2014г', '2018г'],
    correct: 2,
  },
  
  {
    title: 'Кто был первым чемпионом UFC? ',
    variants: ['Рэнди Кутюр', 'Фрэнк Шемрок', 'Тито Ортис'],
    correct: 1,
  },
  
  {
    title: 'Кто получил самый большой гонорар в UFC? ',
    variants: ['Хабиб Нурмагомедов', 'Конор Макгрегор', 'Джон Джонс'],
    correct: 0,
  },
  


];

function Result({correct}){
  return(
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Поробовать снова</button>
      </a>
    </div>
  );
}


function Game({step, question , onClickVariant}){
  const percentage = Math.round((step / questions.length) *100)
  return(
    <>
    <div className='progress'>
      <div style={{width: `${percentage}%`}} className='progress__inner'></div>
    </div>
    <h1>{question.title}</h1>
    <ul>
      {
        question.variants.map((text, index) => (
        <li onClick={() => onClickVariant(index)} key={text}>
          {text}
        </li>))
      }
    </ul>
    </>
  )
}



function App() {

  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant = (index)=>{
    setStep(step +1)

    if(index === question.correct){
      setCorrect(correct + 1)
    }

  }


  return (
    <div className="App">
      {
      step != questions.length ? (
      <Game step ={step} question = {question} onClickVariant = {onClickVariant}/> 
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
