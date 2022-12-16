import React from 'react'

const Banner = () => {
    const types = [
        {
            id: 0,
            name: 'Подборка'
        },
        {
            id: 1,
            name: 'Концерт'
        },
        {
            id: 2,
            name: 'Стендап'
        }
    ]
    return (
        <figure>
            <img src="imgs/img.webp" alt="slide" />
            <figcaption>
                <ul className='top'>
                    <li>Подборка</li>
                    <li>18+</li>
                </ul>
                <div>
                    <h2>Название подборки</h2>
                    <ul className='info'>
                        <li>Количество событий</li>
                    </ul>
                </div>
            </figcaption>
        </figure>
    );
};

export default Banner