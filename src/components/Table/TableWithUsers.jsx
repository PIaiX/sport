import React, {useEffect, useState} from 'react';
import ParticipantControl from "../utils/ParticipantControl";
import TournamentBracket from "../TournamentBracket";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const u = [
    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        isJoin: true,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        isJoin: true,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        isJoin: true,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        isJoin: true,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023'
    },
]

const TableWithUsers = (props) => {
    const {event} = props
    const [users, setUsers] = useState(u)
    const [tab, setTab] = useState(0)
    const er = [{
            age: '0-10',
            weight:'20kg',
            gender:true
        },
        {
            age: '0-10',
            weight:'20kg',
            gender:false
        },
        {
            age: '12-13',
            weight:'30kg',
            gender:true
        },
        {
            age: '12-13',
            weight:'30kg',
            gender:false
        },
        {
            age: '13-14',
            weight:'40kg',
            gender:true
        }]
    useEffect(()=>{
        // запрос на юзеров
    }, [tab])

    return (
        <>
            <div className={'py-2'}>
                <Row>
                    <h3>Турнирные таблицы</h3>
                </Row>
                <div className={'row gy-1 gx-1'}>
                    {er?.map((element, index)=>
                        <Col onClick={()=>setTab(index)}>
                            <div className={`table-tab`}>
                                <div className={`${tab==index?'active':''}`}>
                                    <div>{element.age}</div>
                                    <div>{element.weight}</div>
                                    <div>{element.gender?'Мужской':'Женский'}</div>
                                </div>
                            </div>
                        </Col>
                    )}
                </div>
            </div>
            <div>
                <fieldset>
                    <legend className='mb-0'>Участники</legend>
                    <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                        {users?.map((element, index) =>
                            <li>
                                <ParticipantControl {...element} />
                            </li>
                        )}
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Турнирная таблица</legend>
                    <TournamentBracket users={users} />
                </fieldset>

            </div>
        </>
    );
};

export default TableWithUsers;