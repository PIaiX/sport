import React from 'react'
import PersonFroTable from "./PersonFroTable";
import {CreateMatch, PatchMatch} from "../../services/table";

const BracketItem = (props) => {
    const {
        participantOneId,
        participantTwoId,
        round,
        ordinal,
        users,
        tournamentTableId,
        ICanGetRound,
        participantOneFinalPlace,
        participantTwoFinalPlace,
        id
    } = props

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
        PatchMatch(data, id).then(res=>{
            if (res){
                console.log(res)
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