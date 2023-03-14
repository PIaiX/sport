import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import {useLocation, useParams} from "react-router-dom";
import {GetOneNew} from "../services/news";
import {useAppAction} from "../store";

const n={
    img:"../imgs/image.png",
    title:'1 Новость',
    mainInf:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const NewsPage = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const [newState, setNewState] = useState(state?state:n)
    const {setNotFound} = useAppAction()

    useEffect(()=>{
        !newState && GetOneNew({id}).then(res=>res && setNewState(res) || setNotFound(true))
    }, [])

    return (
        <main>
            <Container>
                <article className='py-4 py-sm-5 mb-5'>
                    <img src={newState?.img} alt={newState?.title} />
                    <h1>{newState?.title}</h1>
                    <div className="text">
                        <p>{newState?.mainInf}</p>
                    </div>
                </article>
            </Container>
        </main>
    )
}

export default NewsPage