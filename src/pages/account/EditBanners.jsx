import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import Col from "react-bootstrap/Col";

const b=[{
    imgUrl:'../imgs/photo_5267083206321097225_x.jpg',
    title:'Мма',
    categoryAge:'16+',
    srcLink:'event/2',
    actions:[
        'Бокс',
        'Каратэ',
        'Шахматы без правил'
    ]
},
    {
        imgUrl:'../imgs/photo_5267083206321097221_y.jpg',
        title:'Рукопашный бой',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    },
    {
        imgUrl:'../imgs/photo_5267083206321097223_x.jpg',
        title:'Дзюдо',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    },
    {
        imgUrl:'../imgs/photo_5267083206321097222_x.jpg',
        title:'Рукопашный бой',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    },
    {
        imgUrl:'../imgs/photo_5267083206321097224_x.jpg',
        title:'Дзюдqwerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    }
]
const EditBanners = () => {
    const [banners, setBanners] =useState(b)

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Баннеры</h1>
                <Link to='add' className='btn-4'>Добавить баннер</Link>
            </div>
            <Row>
            </Row>
            <Row>
                {banners?.map((element, index)=>
                    <Row key={index} className={'bg-white p-2 mt-2'}>
                        <Row>
                            <Col>
                                <img src={checkPhotoPath(element?.imgUr)} className={'img-banner'} alt={element?.title}/>
                            </Col>
                            <Col className={'d-flex align-items-center'}>
                                <div className={'d-inline-block overflow-hidden'}>
                                    {element?.title}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={'position-'}>
                                    редактировать
                                </div>
                            </Col>
                        </Row>
                    </Row>
                )}
            </Row>
        </section>
    );
};

export default EditBanners;

