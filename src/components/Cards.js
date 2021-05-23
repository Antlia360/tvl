import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
import img2 from './images/img-2.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these Epic Destinations! </h1>
            <div className=' cards__container '>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItems
                            src={img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItems
                            src={img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />



                    </ul>

                    <ul className="cards__items">
                        <CardItems
                            src={img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItems
                            src={img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItems
                            src={img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />


                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
