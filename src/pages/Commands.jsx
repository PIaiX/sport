import React, {useEffect, useReducer, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommandCard from "../components/CommandCard";
import {RiSearch2Line} from "react-icons/ri";
import {useForm} from "react-hook-form";
import {getAllTeams} from "../services/team";
import NavPagination from "../components/NavPagination";
import useAnchor from "../hooks/useAnchor";

const Commands = () => {
    const [commands, setCommands] = useState()
    const {handleSubmit, register} = useForm()
    const [filter, setFilter] = useReducer((state, newState) => ({...state, ...newState}), {skip: 0, take: 12})
    const [myRef, executeScroll] = useAnchor()
    const [maxValue, setMaxValue] = useState()
    const onSubmit = (data) => {
        setFilter(data)
    }

    useEffect(() => {
        getAllTeams(filter).then(res => {
            if (res) {
                setMaxValue(res?.meta?.total)
                setCommands((prevState)=>{
                    if (prevState!==undefined)
                        executeScroll()
                    return res?.body
                })
            }
        })
    }, [filter])

    return (
        <main>
            <Container className={'py-2'}>
                <div className={'py-5 d-flex flex-column gap-5 w-100'}>
                    <div style={{width: '300px'}}>
                        <h1 ref={myRef}>Раздел команд</h1>
                        <form action="" className={'form-search '} onSubmit={handleSubmit(onSubmit)}>
                            <input type="search" {...register('search')} placeholder='Найти' style={{boxShadow: '0 0 1px 1px silver'}}/>
                            <button type='submit' className='btn-1'>
                                <RiSearch2Line/>
                            </button>
                        </form>

                    </div>
                    <Row xs={1} sm={2} md={3} xl={4} className='gx-4 gy-4 gy-md-5'>
                        {commands?.map((element, index) =>
                            <Col key={index}>
                                <CommandCard {...element} />
                            </Col>
                        )}
                    </Row>
                </div>
                <NavPagination {...filter} maxValue={maxValue} onChange={(e) => setFilter({...e})}/>
            </Container>
        </main>
    );
};

export default Commands;