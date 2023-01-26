import React from 'react';
import BracketItem from './utils/BracketItem';

const participants = [
  {
    name: 'Семенов Степан',
    birth: '01.01.2001',
  },
  {
    name: 'Мартынов Дмитрий',
    birth: '13.05.2000',
  },
  {
    name: 'Киселев Павел',
    birth: '19.02.2002',
  },
  {
    name: 'Носков Роман',
    birth: '06.11.2001',
  },
  {
    name: 'Матвеев Филипп',
    birth: '01.12.1999',
  },
  {
    name: 'Колесников Михаил',
    birth: '01.01.2001',
  },
  {
    name: 'Миронов Артём',
    birth: '01.01.2001',
  },
  {
    name: 'Сергеев Лев',
    birth: '01.01.2001',
  },
  {
    name: 'Орлов Егор',
    birth: '01.01.2001',
  },
  {
    name: 'Иванов Тимофей',
    birth: '01.01.2001',
  },
];

const participantsLength = participants.length;
let tour1 = [];

if(participantsLength % 2 === 0) {
  const oddArr = participants.filter((obj, index) => {
    return index % 2 === 0;
  });
  const evenArr = participants.filter((obj, index) => {
    return index % 2 !== 0;
  });
  tour1 = oddArr.map((obj, i) => {
    return <BracketItem 
      person1={obj}
      person2={evenArr[i]}
    />
  })
} else {
  tour1 = 'нечетное кол-во'
};

const TournamentBracket = () => {
  

  return (
    <div className="bracket">
      {tour1}

      <div className="item-2">
        <div className='person'>
          <img src="imgs/photo-replace.png" alt="replace" />
          <div>
              <div className='name'>Имя Фамилия</div>
              <div className='text'>01.01.2001</div>
          </div>
        </div>
        <div className='person'>
          <img src="imgs/photo-replace.png" alt="replace" />
          <div>
              <div className='name'>Имя Фамилия</div>
              <div className='text'>01.01.2001</div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default TournamentBracket;