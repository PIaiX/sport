import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {config, useSpring, animated} from "@react-spring/web";

const ChangeLocation = ({children, ...props}) => {
    const {pathname} = useLocation()
    const [newUrl, setNewUrl] = useState('')
    const styles = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration:300
        },
        reset:!(newUrl==pathname)
    })

    useEffect(()=>{
        setNewUrl(pathname)
    },[pathname])

    return (
        <animated.div {...props} style={styles}>
            {children}
        </animated.div>
    );
};

export default ChangeLocation;