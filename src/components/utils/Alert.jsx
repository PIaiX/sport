import React, {useEffect} from 'react'
import {useAppAction, useAppSelector} from "../../store";

const Alert= () => {
    const alertState = useAppSelector((state) => state.app.alertSlice)
    const {setAlert} = useAppAction()
    useEffect(()=>{
        if (alertState?.isShow && alertState?.message){
            const timer = setTimeout(()=>setAlert(null), 3000)
            // return ()=>clearTimeout(timer)
        }
    }, [alertState])
    return (
        <div className={
            'm ' + `${alertState?.isShow ? 'alert' : ''} ${alertState?.typeAlert ? alertState?.typeAlert : ''}`
        }>
            <div>
                {alertState?.message}
            </div>
        </div>
    )
}

export default Alert
