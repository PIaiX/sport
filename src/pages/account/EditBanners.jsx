import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import Col from "react-bootstrap/Col";
import {DeleteOneBanner, GetBanners} from "../../services/banners";
import {DeleteOneNew} from "../../services/news";

const EditBanners = () => {
    const [banners, setBanners] =useState()

    useEffect(()=>{
        GetBanners().then(res=>{
            res && setBanners(res)
        })
    },[])

    const delOneBanner = (id)=>{
            DeleteOneBanner(id).then(res=>{
                console.log(res)
                res && setBanners(banners?.filter(element=>element?.id!=res.id))
            })
    }
    console.log(banners)

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Баннеры</h1>
                <Link to='add' className='btn-4'>Добавить баннер</Link>
            </div>
            <div>
                {banners?.map((element, index)=>
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
                                <div className={'position-'} onClick={()=>delOneBanner(element?.id)}>
                                    Удалить
                                </div>
                            </Col>
                        </Row>
                    </Row>
                )}

            </div>

        </section>
    );
};

export default EditBanners;

