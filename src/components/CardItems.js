import React from 'react'
import { Link } from 'react-router-dom'


function CardItems(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__items__link" to={props.path}>
                    <figure className='cards__items__pic-wrap' data-category={props.label}>

                        <img src={props.src} className='cards__item__img' alt='Travel Image'>
                        </img>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__items__text' > {props.text} </h5>

                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItems
