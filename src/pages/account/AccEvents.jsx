import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AccEventPreview from '../../components/AccEventPreview';
import {getActiveEvents, getArchivedEvents} from "../../services/event";
import {useAppSelector} from "../../store";

const ae=[
    {
        id:123,
        idUser:1,
        date:'15.02.2023',
        img:'imgs/img1.jpeg',
        title:'Название мероприятия 1',
        role:1,
        count:20,
        active:true
    },
    {
        id:135,
        idUser:32,
        date:'23.02.2023',
        img:'imgs/img2.jpeg',
        title:'Название мероприятия 2',
        role:2,
        count:18,
        active:true
    },
    {
        id:345,
        idUser:33,
        date:'01.03.2023',
        img:'imgs/img1.jpeg',
        title:'Название мероприятия 3',
        role:1,
        count:20,
        active:true
    }
]
const are=[
    {
        id:123,
        idUser:1,
        date:'15.02.2023',
        img:'imgs/img1.jpeg',
        title:'Название мероприятия 1',
        role:1,
        count:20,
        active:false
    },
    {
        id:135,
        idUser:32,
        date:'23.02.2023',
        img:'imgs/img2.jpeg',
        title:'Название мероприятия 2',
        role:2,
        count:18,
        active:false
    },
    {
        id:345,
        idUser:33,
        date:'01.03.2023',
        img:'imgs/img1.jpeg',
        title:'Название мероприятия 3',
        role:1,
        count:20,
        active:false
    }

]

const AccEvents = () => {
    const [activeEvents, setActiveEvents] = useState(ae);
    const [archivedEvents, setArchivedEvents] = useState(are);
    const myEvents = useAppSelector(state=>state.user.user?.myEvents)
    const requests = useAppSelector(state=>state.user.user?.requests).map(element=>element?.event)

    console.log(requests)
    useEffect(() => {
        getActiveEvents().then(res=>{
            if(res)setActiveEvents(res)
        })

        getArchivedEvents().then(res=>{
            if(res)setArchivedEvents(res)
        })

    }, [])


    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Мероприятия</h1>
                <Link to='add' className='btn-4'>Создать мероприятие</Link>
            </div>
            <h3>Текущие мероприятия</h3>
            <div className='event-preview top'>
                <div className='date'>Дата</div>
                <div className='title'>Название мероприятия</div>
                <div className='role'>Роль</div>
                <div className='count'>Количество участников</div>
                <div className="btns"></div>
            </div>
            <ul className='g-3 g-xl-2 row row-cols-1 row-cols-sm-2 row-cols-xl-1 list-unstyled mb-4 mb-sm-5'>
                {myEvents?.map((element, index)=>
                    <li key={index}>
                        <AccEventPreview role={2} active={true} {...element} />
                    </li>
                )}
                {requests?.map((element, index)=>
                    <li key={index}>
                        <AccEventPreview role={1} active={true} {...element} />
                    </li>
                )}
            </ul>

{/*            <h3>Архивные мероприятия</h3>
            <div className='event-preview top'>
                <div className='date'>Дата</div>
                <div className='title'>Название мероприятия</div>
                <div className='role'>Роль</div>
                <div className='count'>Количество участников</div>
                <div className="btns"></div>
            </div>
            <ul className='g-3 g-xl-2 row row-cols-1 row-cols-sm-2 row-cols-xl-1 list-unstyled mb-4 mb-sm-5'>
                {archivedEvents?.map((element, index)=>
                    <li key={index}>
                        <AccEventPreview {...element} />
                    </li>
                )}
            </ul>*/}
        </section>
    );
};

export default AccEvents;