import React from 'react';
import {Link} from 'react-router-dom';

const FurnitureCard = (props) => {
    return(
        <Link to={'/furniture/'+props.data.id}>
            <div className='furnitureCard'>
                <h4>{props.data.make} {props.data.model}</h4>
                <img src={props.data.image} className='furniture-card-image' alt='' />
                <p>price: {props.data.price} bgn</p>
            </div>
        </Link>
    )
}

export default FurnitureCard;