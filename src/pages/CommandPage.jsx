import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import Participant from "../components/utils/Participant";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const c = {
    id: 2, name: 'Команда 4', count: 7, image: 'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg', wins:2,
    participants: [
        {
            id: 60,
            email: "taratatataaaa@mail.ru",
            role: "USER",
            firstName: "Игнорь",
            image: "",
            lastName: "Игорев",
            patronymic: null,
            gender: true,
            isVerified: true,
            isPublicProfile: true,
            birthDate: "2004-04-27T21:00:00.000Z",
            height: 170,
            weight: 61,
            phone: "+79616548238",
            address: null,
            city: null,
            district: null,
            region: null
        },
        {
            firstName: 'Heroi',
            lastName: 'Make',
            birthDate: "2000-04-27T21:00:00.000Z",
            city: 'Kazan',
            gender: true,
            weight: '23',
            image: null
        },
    ]

}
const CommandPage = () => {
    const [command, setCommand] = useState(c)
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
                                <h3>Колличеcтво побед: {command?.wins}</h3>
                                <div className="d-flex mt-3">
                                    <button type='button' className='btn-1'>Вступить</button>
                                </div>

                            </Col>
                        </Row>
                    </article>

                    <div className='card-body'>
                        <h1>Участники</h1>
                        {
                            command?.participants?.length != 0 &&
                            <div className='participant head'>
                                <div className='name'>Участник</div>
                                <div className="birthDate">Год рождения</div>
                                <ul className="params">
                                    <li>
                                        Полных лет
                                    </li>
                                    <li>
                                        Пол
                                    </li>
                                    <li>
                                        Вес
                                    </li>
                                </ul>
                            </div>
                        }
                        <ul className='list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-1 g-2 g-sm-3 g-md-4 g-lg-2'>
                            {
                                command?.participants?.map((element, index) =>
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