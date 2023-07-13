import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import Participant from "../components/utils/Participant";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link, useParams} from "react-router-dom";
import {getOneTeam, getParticipants} from "../services/team";
import {useAppAction, useAppSelector} from "../store";
import Medals from "../components/Medals/Medals";
import {useUserAction} from "../store/slices/user/actions";

const CommandPage = () => {
    const {id} = useParams()
    const {setAlert} = useAppAction()
    const {sendRequestToTeam, leaveTeam} = useUserAction()
    const [acceptUsers, setAcceptUsers] = useState()
    const [command, setCommand] = useState()

    const myCommands = useAppSelector(state => state.user.user?.myOwnCommands)
    const myRequests = useAppSelector(state => state.user.user?.myRequests)
    const myRequestsCommands = useAppSelector(state => state.user.user?.myRequestsCommands)

    const isMyOwnCommands = myCommands?.find(element=>element==id)
    const isMyRequestsCommands = myRequestsCommands?.find(element=>element==id)
    const isRequestSended = myRequests?.find(element=>element==id)

    useEffect(()=>{
        getOneTeam(id).then(res=>setCommand(res))
    }, [])

    useEffect(()=>{
        getParticipants(id).then(setAcceptUsers)
    }, [isMyRequestsCommands])

    const sendRequest = ()=>{
        sendRequestToTeam(id)
            .then(()=>
                setAlert({message: 'Запрос отправлен!', typeAlert: 'good'}))
    }

    const leaveTeamOut = ()=>{
        leaveTeam(id)
            .then(()=>
                setAlert({message: 'Вы покинули команду!', typeAlert: 'good'}))
    }

    return (
        <main>
            <Container>
                <div className={'command'}>
                    <article className='py-4 py-sm-5 w-100'>
                        <Row className='gx-4 gy-4 gy-md-5'>
                            <Col sm={6} md={4} xl={3}>
                                <img src={checkPhotoPath(command?.image)} alt={command?.name}/>
                            </Col>
                            <Col>
                                <h1>Название: {command?.name}</h1>
                                <Medals {...command?.medals}>
                                        <h3>Колличеcтво побед: {command?.wins}</h3>
                                </Medals>

                                <div className="d-flex mt-3">
                                    {isMyOwnCommands?
                                        <Link to={`/account/command/add/${id}`}>
                                            <button type='button' className='btn-1'>Редактировать</button>
                                        </Link>
                                        :
                                        isMyRequestsCommands?
                                            <button type='button' onClick={leaveTeamOut} className='btn-1'>Выйти</button>
                                            :
                                            isRequestSended?
                                                <button type='button' className='btn-1'>Запрос отправлен</button>
                                                :
                                                <button type='button' onClick={sendRequest} className='btn-1'>Вступить</button>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </article>

                    <div className='card-body'>
                        <h1>Участники</h1>
                        {
                            acceptUsers?.length != 0 &&
                            <div className='participant head'>
                                <div className='name'>Участник</div>
                                <div className="birthDate">Год рождения</div>
                                <ul className="params">
                                    <li>
                                        Пол
                                    </li>
                                    <li>
                                        Вес
                                    </li>
                                    <li>
                                        Медали
                                    </li>
                                </ul>
                            </div>
                        }
                        <ul className='list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-1 g-2 g-sm-3 g-md-4 g-lg-2'>
                            {
                                acceptUsers?.map((element, index) =>
                                    <li key={index}>
                                        <Participant
                                            approved={true}
                                            {...element}
                                        />
                                    </li>
                                )
                            }
                        </ul>

                    </div>
                </div>
            </Container>
        </main>
    )
        ;
};

export default CommandPage;