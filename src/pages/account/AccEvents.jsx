import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AccEventPreview from '../../components/AccEventPreview';
import {useAppSelector} from "../../store";
import {useUserAction} from "../../store/slices/user/actions";

const AccEvents = () => {
    const myEvents = useAppSelector(state=>state.user.user?.myEvents)
    const participation = useAppSelector(state=>state.user.user?.participation)?.map(element=>element?.event)
    const {getMyEvents, myRequests} = useUserAction()

    useEffect(() => {
        getMyEvents()
        myRequests()
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
                        <AccEventPreview role={'Организатор'} active={true} {...element} />
                    </li>
                )}
                {participation?.map((element, index)=>
                    <li key={index}>
                        <AccEventPreview role={'Участник'} active={true} {...element} />
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