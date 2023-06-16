import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import EventCard from "../components/EventCard";
import CommandCard from "../components/CommandCard";
import {RiSearch2Line} from "react-icons/ri";
import {useForm} from "react-hook-form";

const c=[
    {id:2, name:'Команда 1', count:6, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 2', count:3, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 3', count:26, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 4', count:7, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 1', count:6, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 2', count:3, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 3', count:26, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
    {id:2, name:'Команда 4', count:7, image:'users/d6e10f99-a4a7-4080-a844-aebba5df714c-n3.jpg'},
]

const Commands = () => {
    const [commands, setCommands] = useState(c)
    const {handleSubmit} = useForm()
    const onSubmit = (data)=>{
        alert('Поиск')
    }
    return (
        <main>
            <Container >
                <div className={'py-5 d-flex flex-column gap-5 w-100'}>
                    <div style={{ width:'300px'}}>
                        <h1>Раздел команд</h1>
                        <form action="" className={'form-search '} onSubmit={handleSubmit(onSubmit)}>
                            <input type="search" placeholder='Найти' style={{boxShadow:'0 0 1px 1px silver'}}/>
                            <button type='submit' className='btn-1' >
                                <RiSearch2Line />
                            </button>
                        </form>

                    </div>
                    <Row xs={1} sm={2} md={3} xl={4} className='gx-4 gy-4 gy-md-5'>
                        {commands?.map((element, index)=>
                            <Col key={index}>
                                <CommandCard {...element} />
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </main>
    );
};

export default Commands;