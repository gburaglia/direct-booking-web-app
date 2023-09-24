import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/living-room.webp';
import PropTypes from 'prop-types';
export default function Property({property}) {
    const{name,slug,images,price} = property;
    return ( 
    <article className="room">
        <div className="img-container"> 
            <img src={images[0] || defaultImg} alt="single property" />
            <Link to={`/properties/${slug}`} className="btn-primary room-link">
                Details
            </Link>
        </div>
        <p className="room-info">{name}</p>
    </article>
    );
    
}

Property.propTypes = {
    property:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string),
        //price:PropTypes.number.isRequired
    })
}

