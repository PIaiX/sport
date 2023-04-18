import React, {memo, useContext, useEffect, useState} from 'react';
import ParticipantControl from "../utils/ParticipantControl";
import TournamentBracket from "../TournamentBracket";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AcceptRequest, GetAcceptRequests} from "../../services/table";
import {EventContext, UserContext} from "../../pages/account/AddEvent";

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
    const {event, setEvent} = props
    const [acceptUsers, setAcceptUsers] = useState()
    const [categoriesTab, setCategoriesTab] = useState()
    const [tab, setTab] = useState()

    useEffect(() => {
        if(tab){
            GetAcceptRequests(event?.id).then(res=>{
                if(res && res.length>0){
                    const users = res?.map(element=>element?.user)
                    setAcceptUsers(users)
                }
            })
        }
    }, [tab])

    useEffect(() => {
        if(!tab)
            setTab(event?.categories[0]?.id)

        setCategoriesTab(event?.categories.map(element => ({
            age: element.weightCategory?.ageCategory?.ageFrom + '-' + element.weightCategory?.ageCategory?.ageTo,
            gender: element?.gender,
            weight: element?.weightCategory?.weightFrom + '-' + element?.weightCategory?.weightTo,
            count:element?._count?.participants,
            id: element?.id
        })))
    }, [event])

    return (
        <>
            {acceptUsers?.length>0 &&
                <div className={'py-2'}>
                <fieldset>
                    <legend className='mb-0'>Заявки</legend>
                    <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                        {acceptUsers?.map((element, index) =>
                            <li key={index}>
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
            </div>
            }
            <div>
                <Row>
                    <h3>Турнирные таблицы</h3>
                </Row>
                <div className={'row gy-1 gx-1'}>
                    {categoriesTab?.map((element, index) =>
                        <Col key={index} onClick={() => setTab(element?.id)}>
                            <div className={`table-tab`}>
                                <div className={`${tab == element?.id ? 'active' : ''}`}>
                                    <div>Возраст: {element.age}</div>
                                    <div>Вес: {element.weight}</div>
                                    <div>{element.gender ? 'Мужской' : 'Женский'}</div>
                                    <div>Участников: {element.count}</div>
                                </div>
                            </div>
                        </Col>
                    )}
                </div>
                <fieldset>
                    <legend>Турнирная таблица</legend>
                    <TournamentBracket
                        acceptUsers={acceptUsers}
                        tab={tab}
                        event={event}
                        setEvent={setEvent}
                        tournamentTableId={event?.categories?.find(element=>element.id==tab)?.tournamentTable?.id}
                    />
                </fieldset>

            </div>
        </>
    );
};

export default memo(TableWithUsers);