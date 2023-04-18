import React, {useEffect, useState} from 'react'
import PersonFroTable from "./PersonFroTable";
import {CreateMatch, PatchMatch} from "../../services/table";

const BracketItem = (props) => {
    const {
        participantOneId,
        participantTwoId,
        round,
        ordinal,
        users,
        score,
        tournamentTableId,
        ICanGetRound,
        participantOneFinalPlace,
        participantTwoFinalPlace,
        readOnly,
        id
    } = props

    const [win, setWin] = useState()
    useEffect(()=>{
        setWin(score=='WIN'?1:score=='LOSE'?2:undefined)
    }, [score])

    const CreateNewMatch = (data) => {
        const match = {round, ordinal: ordinal + 1, tournamentTableId}
        const {number, id} = data
        const req = {
            ...match,
            ...data
        }
        CreateMatch(req).then(res => {
            if (res) {
                ICanGetRound(res)
            }
        })
    }

    const updateMatch = (data) =>{
        let req = {...data}
        const {participantOneId, participantTwoId} = data
        if(participantTwoId!=undefined || participantOneId!=undefined){
            req['participantTwoFinalPlace'] = null
            req['participantOneFinalPlace'] = null
            req['score'] = null
        }
        if (participantTwoId===null)
            req['participantTwoFinalPlace'] = null
        if (participantOneId===null)
            req['participantOneFinalPlace'] = null

        console.log(req)
        PatchMatch(req, id).then(res=>{
            if (res){
                ICanGetRound(res)
            }
        })
    }

    return (
        <div className={`item-${round} index-${ordinal} person-in-table`}>
            {
                [
                    {user: participantOneId, place: participantOneFinalPlace},
                    {user: participantTwoId, place: participantTwoFinalPlace}
                ]?.map(({user: element, place}, index) =>
                    <PersonFroTable
                        key={index}
                        readOnly={readOnly}
                        win={win}
                        id={id}
                        place={place}
                        index={index}
                        user={users?.find(el => el.id == element)}
                        users={users}
                        createMatch={CreateNewMatch}
                        updateMatch={updateMatch}
                    />
                )
            }
        </div>
    )
}

export default BracketItem