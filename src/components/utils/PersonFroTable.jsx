import React, {useEffect, useRef, useState} from 'react';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {AcceptRequest} from "../../services/table";
import {RiArrowDownSLine, RiMore2Fill} from "react-icons/ri";

const PersonFroTable = (props) => {
    const { eventId, height, isJoin,onChange, users, user={firstName:'', lastName:''}, createMatch,  updateMatch, id:idMatch, index:indexOfUser, win, place:placeOfUser, readOnly} = props
    const {firstName, lastName, gender, id, image, place:userPlace} = user
    const [isApproved, setIsApproved] = useState(isJoin);
    const [winner, setWinner] = useState()
    const ref = useRef();
    useEffect(()=>{
        setPlace(placeOfUser)
    }, [placeOfUser])
    const [showParams, setShowParams] = useState(false);
    const [showControl, setShowControl] = useState(false);
    const [place, setPlace] = useState(userPlace)
    useEffect(()=>{
        setPlace(userPlace)
    },[userPlace])

    useEffect(()=>{
        setWinner(indexOfUser+1==win)
    } ,[win])

    const UpdatePlace=(place2)=>{
        const pl = place2==place?null:place2
        const u= indexOfUser==0?
            {participantOneFinalPlace:pl}
            :{participantTwoFinalPlace:pl}
        setPlace(pl);
        updateMatch(u)
    }


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
        <div className={`participant-control ${indexOfUser==1?'align-self-end':''}`}>
            <div className='name'>
                <img src={checkPhotoPath(image, true)}/>
                <div>
                    {firstName+ ' ' +lastName}
                </div>
            </div>
            {!readOnly &&
                <button type='button' className='btn-none' onClick={() => setShowParams(!showParams)}>
                    <RiArrowDownSLine/>
                </button>
            }
            {
                user?.firstName!='' && !readOnly &&
                <button type='button' className='btn-none ms-3' onClick={() => setShowControl(!showControl)}><RiMore2Fill/>
                </button>
            }
            {
                place && <div className='place'>{place}</div>
            }
            {!place && win && user?.firstName!='' && ( winner
                && <div className='winner'></div>
                || <div className='loser'></div>
                )}
            {
                (showControl) &&
                <ul className='params controls' ref={ref}>
                    <li>
                        <label className={'py-1'}>
                            <input type="checkbox" checked={winner} onClick={()=>{
                                setWinner(true)
                                updateMatch({score:winner?null:winner==indexOfUser?'WIN':'LOSE'})
                            }
                            }/>
                            <span>Выбрать победителем</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==1}
                                   onClick={()=> UpdatePlace(1)}
                            />
                            <span>Присвоить 1 место</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==2}
                                   onClick={()=> UpdatePlace(2)}
                            />
                            <span>Присвоить 2 место</span>
                        </label>
                        <label className={'py-1'}>
                            <input type="checkbox"
                                   checked={place==3}
                                   onClick={()=> UpdatePlace(3)}
                            />
                            <span>Присвоить 3 место</span>
                        </label>
                    </li>
                </ul>
            }
            {
                (showParams) &&
                <ul className='params user-select' ref={ref}>
                    <li onClick={()=>{
                        const u= indexOfUser==0?
                            {participantOneId:null}
                            :{participantTwoId:null}
                        updateMatch(u)
                        handleClick()
                    }}>
                        <strong>
                            {'оставить пусто'}
                        </strong>
                    </li>
                    {users?.map((element, index)=>
                        <li key={index} onClick={()=>{
                            handleClick()
                            if (idMatch){
                                const u= indexOfUser==0?
                                    {participantOneId:element.id}
                                    :{participantTwoId:element.id}
                                updateMatch(u)
                            }
                            else{
                                const u= indexOfUser==0?
                                    {participantOneId:element.id}
                                    :{participantTwoId:element.id}
                                createMatch(u)
                            }
                        }}>
                            <strong>
                                {element.firstName}
                            </strong>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export default PersonFroTable