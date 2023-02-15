import React, {useEffect, useState, useRef} from 'react'
import BracketItem from './utils/BracketItem'

const tour1 = [
  {
    tour: 1,
    match: 1,
    opponent1: {
      name: '-',
      birth: '-',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Семенов Степан',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 2,
    opponent1: {
      name: 'Мартынов Дмитрий',
      birth: '13.05.2000',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Киселев Павел',
      birth: '19.02.2002',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 3,
    opponent1: {
      name: 'Носков Роман',
      birth: '06.11.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Матвеев Филипп',
      birth: '01.12.1999',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 4,
    opponent1: {
      name: 'Колесников Михаил',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Миронов Артём',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 5,
    opponent1: {
      name: 'Сергеев Лев',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Орлов Егор',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 6,
    opponent1: {
      name: 'Малышев Денис',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Романов Максим',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 7,
    opponent1: {
      name: 'Курочкин Кирилл',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Дьяков Вячеслав',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 8,
    opponent1: {
      name: 'Хромов Михаил',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Максимов Никита',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 9,
    opponent1: {
      name: 'Фомичев Мирослав',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Алексеев Никита',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 10,
    opponent1: {
      name: 'Волков Назар',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Левин Валерий',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 11,
    opponent1: {
      name: 'Черняев Артём',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Покровский Илья',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 12,
    opponent1: {
      name: 'Бочаров Даниил',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Михайлов Михаил',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 13,
    opponent1: {
      name: 'Дьяков Давид',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Киселев Марк',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 14,
    opponent1: {
      name: 'Спиридонов Вадим',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Волков Роман',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 15,
    opponent1: {
      name: 'Озеров Евгений',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Галкин Артемий',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    tour: 1,
    match: 16,
    opponent1: {
      name: 'Павлов Арсений',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Ефремов Иван',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
]
const tour2 = [
  {
    match: 1,
    opponent1: {
      name: 'Семенов Степан',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Киселев Павел',
      birth: '19.02.2002',
      winner: false,
      place: 0,
    },
  },
  {
    match: 2,
    opponent1: {
      name: 'Носков Роман',
      birth: '06.11.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Миронов Артём',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    match: 3,
    opponent1: {
      name: 'Орлов Егор',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Малышев Денис',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    match: 4,
    opponent1: {
      name: 'Курочкин Кирилл',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Максимов Никита',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    match: 5,
    opponent1: {
      name: 'Алексеев Никита',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Волков Назар',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    match: 6,
    opponent1: {
      name: 'Черняев Артём',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Михайлов Михаил',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    match: 7,
    opponent1: {
      name: 'Дьяков Давид',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Волков Роман',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    match: 8,
    opponent1: {
      name: 'Галкин Артемий',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Павлов Арсений',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
]
const tour3 = [
  {
    match: 1,
    opponent1: {
      name: 'Семенов Степан',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Миронов Артём',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    match: 2,
    opponent1: {
      name: 'Орлов Егор',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
    opponent2: {
      name: 'Курочкин Кирилл',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
  {
    match: 3,
    opponent1: {
      name: 'Волков Назар',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Михайлов Михаил',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
  {
    match: 4,
    opponent1: {
      name: 'Дьяков Давид',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Галкин Артемий',
      birth: '01.01.2001',
      winner: false,
      place: 0,
    },
  },
]
const tour4 = [
  {
    match: 1,
    opponent1: {
      name: 'Миронов Артём',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
    opponent2: {
      name: 'Курочкин Кирилл',
      birth: '01.01.2001',
      winner: false,
      place: 3,
    },
  },
  {
    match: 2,
    opponent1: {
      name: 'Волков Назар',
      birth: '01.01.2001',
      winner: false,
      place: 3,
    },
    opponent2: {
      name: 'Дьяков Давид',
      birth: '01.01.2001',
      winner: true,
      place: 0,
    },
  },
]
const tour5 = [
  {
    match: 1,
    opponent1: {
      name: 'Миронов Артём',
      birth: '01.01.2001',
      winner: false,
      place: 2,
    },
    opponent2: {
      name: 'Дьяков Давид',
      birth: '01.01.2001',
      winner: true,
      place: 1,
    },
  },
]


const TournamentBracket = () => {
  const [scrollX, setScrollX] = useState(0);

  const scrollBracket = (event) => {
    event.preventDefault()
    const startX = event.pageX
    
    moveAt(event)
    function moveAt(event) {
      setScrollX(startX - event.pageX)
    }
    document.onmousemove = function(e) {
      moveAt(e);
    }
  }

  const stopScroll = () => {
    document.onmousemove = null
    bracket.onmouseup = null
  }

  const bracket = useRef(null)

  useEffect(() => {
    bracket.current.scrollLeft = scrollX
  })

  return (
    <div 
      className="wrap" 
      ref={bracket} 
      onMouseUp={() => stopScroll()} 
      onMouseDown={(event) => scrollBracket(event)}
    >
      <div 
        className="bracket" 
        id="id-1" >
        <div className="tour">
          {
            tour1.map((obj, i) => {
              return <BracketItem 
                key={i}
                tour={1}
                order={i}
                person1={obj.opponent1}
                person2={obj.opponent2}
              />
            })
          }
        </div>
        <div className="tour">
          {
            tour2.map((obj, i) => {
              return <BracketItem 
                key={i}
                tour={2}
                order={i}
                person1={obj.opponent1}
                person2={obj.opponent2}
              />
            })
          }
        </div>
        <div className="tour">
          {
            tour3.map((obj, i) => {
              return <BracketItem 
                key={i}
                tour={3}
                order={i}
                person1={obj.opponent1}
                person2={obj.opponent2}
              />
            })
          }
        </div>
        <div className="tour">
          {
            tour4.map((obj, i) => {
              return <BracketItem 
                key={i}
                tour={4}
                order={i}
                person1={obj.opponent1}
                person2={obj.opponent2}
              />
            })
          }
        </div>
        <div className="tour">
          {
            tour5.map((obj, i) => {
              return <BracketItem 
                key={i}
                tour={5}
                order={i}
                person1={obj.opponent1}
                person2={obj.opponent2}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TournamentBracket