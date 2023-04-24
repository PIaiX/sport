import React, {useEffect, useReducer, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewsPreview from '../components/NewsPreview'
import NavPagination from '../components/NavPagination'
import {GetNews} from "../services/news";



const AllNews = () => {
    const [filter, setFilter] = useReducer((state, newState)=>({...state, ...newState}), {skip:0, take:12})
    const [maxValue, setMaxValue] = useState()
    const [news, setNews] = useState()

    useEffect(()=>{
        GetNews().then(res=>{
            if(res){
                setMaxValue(res?.meta?.total)
                setNews(res?.body)

            }
        })

    }, [])

    return (
        <main>
            <Container className='py-4 py-md-5'>
                <h1>Статьи</h1>
                <Row xs={1} sm={2} md={3} xl={4} className="gx-3 gx-md-4 gy-4 gy-md-5">
                    {news?.map((element, index) =>
                        <Col key={index}>
                            <NewsPreview {...element} />
                        </Col>
                    )}
                </Row>
                <NavPagination {...filter} maxValue={maxValue} onChange={(e)=>setFilter({...e}) } />
            </Container>
        </main>
    )
}

export default AllNews