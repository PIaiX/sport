import React, {useEffect, useRef, useState} from 'react';
import {RiArrowDownSLine, RiMore2Fill} from "react-icons/ri";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {AcceptRequest} from "../../services/table";

const ParticipantControl = (props) => {
    const {firstName, lastName, gender, id, image, eventId, height, isJoin, birthDate, weight, age, onChange} = props
    const [isApproved, setIsApproved] = useState(isJoin);
    const ref = useRef();
    const [showParams, setShowParams] = useState(false);
    const [showControl, setShowControl] = useState(false);

    useEffect(()=>{
        setIsApproved(false)
        handleClick()
    }, [id])

    function handleClick() {
        setShowControl(false);
        setShowParams(false);
    }

    useOnClickOutside(ref, () => handleClick());

    useEffect(() => {
        if(isApproved)
            AcceptRequest({userId:id, eventId}).then(res => {
                if (res)
                    onChange()
            })

    }, [isApproved])

    return (
        <div className={`participant-control ${isApproved ? 'approved' : ''}`}>
            <div className='name'>
                <img src={checkPhotoPath(image, true)}/>
                <div>
                    <h6>{firstName + ' ' + lastName}</h6>
                </div>
            </div>
            <button type='button' className='btn-none' onClick={() => setShowParams(!showParams)}><RiArrowDownSLine/>
            </button>
            <button type='button' className='btn-none ms-3' onClick={() => setShowControl(!showControl)}><RiMore2Fill/>
            </button>
            {
                (showControl) &&
                <ul className='params controls' ref={ref}>
                    <li>
                        <label>
                            <input type="checkbox" value={isApproved} checked={isApproved}
                                   onChange={() => setIsApproved(!isApproved)}/>
                            <span>Одобрить</span>
                        </label>
                    </li>
                </ul>
            }
            {
                (showParams) &&
                <ul className='params' ref={ref}>
                    <li>
                        <strong>Дата рождения: </strong>
                        <span>{birthDate}</span>
                    </li>
                    <li>
                        <strong>Возраст: </strong>
                        <span>{age}</span>
                    </li>
                    <li>
                        <strong>Рост: </strong>
                        <span>{height}</span>
                    </li>
                    <li>
                        <strong>Вес: </strong>
                        <span>{weight}</span>
                    </li>
                    <li>
                        <strong>Пол: </strong>
                        <span>{gender ? 'Мужской' : 'Женский'}</span>
                    </li>
                </ul>
            }
        </div>
    );
};

export default ParticipantControl;