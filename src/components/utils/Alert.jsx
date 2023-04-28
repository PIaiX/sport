import React from 'react'
import {useAppSelector} from "../../store";

const Alert= () => {
    const alertState = useAppSelector((state) => state.app.alertSlice)
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
