import React from 'react'

const Banner = () => {
    return (
        <figure>
            <img src="imgs/img.webp" alt="slide" />
            <figcaption>
                <div className='top'>
                    <span>Подборка</span>
                </div>
                <div>
                    <h2>Название подборки</h2>
                    <div>
                        <span>Количество событий</span>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

export default Banner