import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {useForm} from "react-hook-form";
import {DeleteOneNew, GetNews} from "../../services/news";
import Col from "react-bootstrap/Col";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";

const EditNews = () => {
    const [news, setNews] = useState()
    useEffect(()=>{
        GetNews().then(res=>{
            res && setNews(res?.body)
        })
    },[])
    const delOneNew = (id)=>{
        DeleteOneNew(id).then(res=>{
            res && setNews(news?.filter(element=>element?.id!=res.id))
        })
    }
    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Новости</h1>
                <Link to='add' className='btn-4'>Создать новость</Link>
            </div>
            <div>
                {news?.map((element, index)=>
                    <Row key={index} className={'bg-white p-2 mt-2'}>
                        <Row>
                            <Col>
                                <img src={checkPhotoPath(element?.image)} className={'img-banner'} alt={element?.title}/>
                            </Col>
                            <Col className={'d-flex align-items-center'}>
                                <div className={'d-inline-block overflow-hidden'}>
                                    {element?.title}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <NavLink to={`add/${element?.id}`}>
                                    <div className={'position-'}>
                                        Редактировать
                                    </div>
                                </NavLink>
                                <div className={'position-'} onClick={()=>delOneNew(element?.id)}>
                                    Удалить
                                </div>
                            </Col>
                        </Row>
                    </Row>
                )}

            </div>

        </section>
    )
};

export default EditNews;