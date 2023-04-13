import React, {useEffect, useState} from 'react';
import ParticipantControl from "../utils/ParticipantControl";
import TournamentBracket from "../TournamentBracket";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {GetTable} from "../../services/table";

const au = [
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

const TableWithUsers = (props) => {
    const {event} = props
    const [acceptUsers, setAcceptUsers] = useState(au)
    const [categoriesTab, setCategoriesTab] = useState()
    const [tab, setTab] = useState(0)

    useEffect(() => {
        // запрос на запросных юзеров
    }, [tab])

    useEffect(() => {
        setTab(event?.categories[0]?.id)
        setCategoriesTab(event?.categories.map(element => ({
            age: element.weightCategory?.ageCategory?.ageFrom + '-' + element.weightCategory?.ageCategory?.ageTo,
            gender: element?.gender,
            weight: element?.weightCategory?.weightFrom + '-' + element?.weightCategory?.weightTo,
            id: element?.id
        })))
    }, [event])

    return (
        <>
            <div className={'py-2'}>
                <Row>
                    <h3>Турнирные таблицы</h3>
                </Row>
                <div className={'row gy-1 gx-1'}>
                    {categoriesTab?.map((element, index) =>
                        <Col key={index} onClick={() => setTab(element?.id)}>
                            <div className={`table-tab`}>
                                <div className={`${tab == element?.id ? 'active' : ''}`}>
                                    <div>{element.age}</div>
                                    <div>{element.weight}</div>
                                    <div>{element.gender ? 'Мужской' : 'Женский'}</div>
                                </div>
                            </div>
                        </Col>
                    )}
                </div>
            </div>
            <div>
                <fieldset>
                    <legend className='mb-0'>Заявки</legend>
                    <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                        {acceptUsers?.map((element, index) =>
                            <li>
                                <ParticipantControl
                                    {...element}
                                    eventId={event?.id}
                                    onChange={()=>{
                                        setAcceptUsers(acceptUsers.filter(user=>user.id!=element.id))
                                    }}
                                />
                            </li>
                        )}
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Турнирная таблица</legend>
                    <TournamentBracket acceptUsers={acceptUsers}/>
                </fieldset>

            </div>
        </>
    );
};

export default TableWithUsers;