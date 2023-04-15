import React, {useEffect, useRef, useState} from 'react';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {AcceptRequest} from "../../services/table";
import {RiArrowDownSLine, RiMore2Fill} from "react-icons/ri";

const users =[
    {
        name:'Рамиль Зиннатуллин',
        params:' 21/67/M'
    },
    {
        name:'Рамиль Зиннатуллин',
        params:' 21/67/M'
    },
    {
        name:'Рамиль Зиннатуллин',
        params:' 21/67/M'
    },

]

const PersonFroTable = (props) => {
    const {firstName, lastName, gender, id, image, eventId, height, isJoin, birthDate, weight, age, onChange} = props
    const [isApproved, setIsApproved] = useState(isJoin);
    const ref = useRef();
    const [showParams, setShowParams] = useState(false);
    const [showControl, setShowControl] = useState(false);
    const [place, setPlace] = useState()

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
        <div className={`participant-control m-1`}>
            <div className='name'>
                <img src={checkPhotoPath(image, true)}/>
            </div>
            <button type='button' className='btn-none' onClick={() => setShowParams(!showParams)}><RiArrowDownSLine/>
            </button>
            <button type='button' className='btn-none ms-3' onClick={() => setShowControl(!showControl)}><RiMore2Fill/>
            </button>
            {
                (showControl) &&
                <ul className='params controls' ref={ref}>
                    <li>
                        <label className={'py-1'}>
                            <input type="checkbox" value={isApproved} checked={isApproved}
                                   onChange={() => setIsApproved(!isApproved)}/>
                            <span>Удалить</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"/>
                            <span>Выбрать победителем</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==1}
                                   onClick={()=>{if(place==1) setPlace(null);else setPlace(1)}}
                            />
                            <span>Присвоить 1 место</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==2}
                                   onClick={()=>{if(place==2) setPlace(null);else setPlace(2)}}
                            />
                            <span>Присвоить 2 место</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==3}
                                   onClick={()=>{if(place==3) setPlace(null);else setPlace(3)}}
                            />
                            <span>Присвоить 3 место</span>
                        </label>
                    </li>
                </ul>
            }
            {
                (showParams) &&
                <ul className='params user-select' ref={ref}>
                    {users?.map((element, index)=>
                        <li key={index} onClick={()=>{
                            handleClick()
                        }}>
                            <strong>
                                {element.name}
                            </strong>
                            <span>{element.params}</span>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export default PersonFroTable