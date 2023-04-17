import React from 'react';
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {useForm} from "react-hook-form";

const EditNews = () => {
    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Новости</h1>
                <Link to='add' className='btn-4'>Создать новость</Link>
            </div>
            <Row>

            </Row>

        </section>
    )
};

export default EditNews;