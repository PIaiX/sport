import React from 'react'
import PersonFroTable from "./PersonFroTable";

const BracketItem = (props) => {
    const {participantOneId, participantTwoId, round, ordinal, id} =props

    return (
        <div className={`item-${round} index-${ordinal} person-in-table`}>
            <PersonFroTable />
            <PersonFroTable />

        </div>
    )
}

export default BracketItem