import React, {useEffect, useRef, useState} from 'react'
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
const u = [
    {
        firstName: "Ramil1",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 1
    },
    {
        firstName: "Ramil2",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 2
    },
    {
        firstName: "Ramil3",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        id: 3,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil4",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 4
    },
    {
        firstName: "Ramil5",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 5
    },
    {
        firstName: "Ramil6",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 6
    },
]
const tours = [tour1, tour2, tour3, tour4, tour5]

const TournamentBracket = (props) => {
    const {acceptUsers} = props

    const [scrollX, setScrollX] = useState(0);
    const bracket = useRef(null)

    const [users, setUsers] = useState(u)

    const scrollBracket = (event) => {
        event.preventDefault()
        const startX = event.pageX

        moveAt(event)

        function moveAt(event) {
            setScrollX(startX - event.pageX)
        }

        document.onmousemove = function (e) {
            moveAt(e);
        }
    }
    const stopScroll = () => {
        document.onmousemove = null
        bracket.onmouseup = null
    }

    useEffect(() => {
        bracket.current.scrollLeft = scrollX
    })

    useEffect(() => {
        // если кол-во пользователей поменялось, значит делаем новый запрос на эту таблицу
    }, [acceptUsers])

    return (
        <div
            className="wrap"
            ref={bracket}
            onMouseUp={() => stopScroll()}
            onMouseDown={(event) => scrollBracket(event)}
        >
            <div className="bracket" id="id-1">
                {tours?.map((tour, index) =>
                    <div className="tour" key={index}>
                        {
                            tour.map((obj, i) => {
                                return <BracketItem
                                    key={i}
                                    tour={index+1}
                                    order={i}
                                    person1={obj.opponent1}
                                    person2={obj.opponent2}
                                />
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default TournamentBracket