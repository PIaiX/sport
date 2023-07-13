import React, {useEffect, useRef, useState} from 'react';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {RiArrowDownSLine, RiMore2Fill} from "react-icons/ri";

const ParticipantMyCommand = (props) => {
    const {firstName, lastName, gender, id, image, height, isJoin, birthDate:birthDateFromServer, weight, age, onChange} = props
    const [isApproved, setIsApproved] = useState(isJoin);
    const ref = useRef();
    const [showParams, setShowParams] = useState(false);
    const [showControl, setShowControl] = useState(false);

    useEffect(()=>{
        handleClick()
    }, [id])

    function handleClick() {
        setShowControl(false);
        setShowParams(false);
    }

    useOnClickOutside(ref, () => handleClick());

    useEffect(() => {
        if(isApproved && !isJoin)
            onChange(id)
        else if(!isApproved && isJoin){
            onChange(id)
        }
    }, [isApproved])

    const birthDate=
        birthDateFromServer?
            birthDateFromServer?.slice(8, 10)+'.'+birthDateFromServer?.slice(5, 7)+'.'+birthDateFromServer?.slice(0, 4)
            :''

    return (
        <div className={`participant-control ${isApproved ? 'approved' : ''}`}>
            <div className='name'>
                <img src={checkPhotoPath(image, true, true)}/>
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
                    {birthDate &&
                        <li>
                            <strong>Дата рождения: </strong>
                            <span>{birthDate}</span>
                        </li>
                    }
                    {age &&
                        <li>
                            <strong>Возраст: </strong>
                            <span>{age}</span>
                        </li>
                    }
                    {height &&
                        <li>
                            <strong>Рост: </strong>
                            <span>{height}</span>
                        </li>
                    }
                    {weight &&
                        <li>
                            <strong>Вес: </strong>
                            <span>{weight}</span>
                        </li>
                    }
                    <li>
                        <strong>Пол: </strong>
                        <span>{gender ? 'Мужской' : 'Женский'}</span>
                    </li>
                </ul>
            }
        </div>
    );};

export default ParticipantMyCommand;