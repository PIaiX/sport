import React, {useCallback, useEffect, useState} from 'react';
import {useUserAction} from "../../../store/slices/user/actions";
import {getRequestsToOtherCommands} from "../../../services/team";

const UseCommands = () => {
    const [commands, setCommands] = useState()
    const {leaveTeam} = useUserAction()

    useEffect(()=>{
        getRequestsToOtherCommands()
            .then(setCommands)
    }, [])

    const leave = useCallback((id)=>{

        leaveTeam(id)
            .then(()=>{
                setCommands(commands?.filter(element=>element.id!=id))
            })
    }, [commands])


    return [commands, leave]
};

export default UseCommands;